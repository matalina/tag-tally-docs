#!/usr/bin/env node
// @ts-check
import { readFileSync, existsSync, statSync, readdirSync } from 'fs';
import { join, dirname, resolve, extname, normalize } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = __dirname;

// Patterns for extracting links
const MARKDOWN_LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;
const WIKILINK_PATTERN = /\[\[([^\]]+)\]\]/g;

// Track all files for reference resolution
const allMarkdownFiles = new Map(); // Maps filename (lowercase) -> full path
const brokenLinks = [];

/**
 * Normalize a file path - handle various link formats
 */
function normalizePath(linkPath, fromFile, baseDir = null) {
  // Remove anchors and query strings
  linkPath = linkPath.split('#')[0].split('?')[0];
  
  // Skip external URLs
  if (linkPath.startsWith('http://') || linkPath.startsWith('https://') || linkPath.startsWith('mailto:')) {
    return null;
  }
  
  // Skip anchors only
  if (linkPath.startsWith('#')) {
    return null;
  }
  
  let resolvedPath;
  
  // Handle absolute paths (starting with /) - relative to project root
  if (linkPath.startsWith('/')) {
    resolvedPath = resolve(projectRoot, linkPath.slice(1));
  } else {
    // Resolve relative to baseDir (permalink) if provided, otherwise use file directory
    const fromDir = baseDir || dirname(fromFile);
    resolvedPath = resolve(fromDir, linkPath);
  }
  
  // Normalize the path
  resolvedPath = normalize(resolvedPath);
  
  // Handle directory links (ending with /) - check for index.md
  if (linkPath.endsWith('/')) {
    resolvedPath = join(resolvedPath, 'index.md');
  } else if (!extname(resolvedPath)) {
    // If no extension, try .md
    resolvedPath += '.md';
  }
  
  // Normalize project root for comparison (ensure no trailing slash)
  const normalizedRoot = normalize(projectRoot).replace(/[\/\\]$/, '');
  const normalizedResolved = normalize(resolvedPath);
  
  // Check if path is within project root
  if (normalizedResolved.startsWith(normalizedRoot + '/') || normalizedResolved.startsWith(normalizedRoot + '\\') || normalizedResolved === normalizedRoot) {
    return normalizedResolved;
  }
  
  return null;
}

/**
 * Check if a file exists (with various extensions)
 * Uses readFileSync with try-catch as existsSync seems unreliable in WSL
 */
function fileExists(filePath) {
  // Try to read the file - if it works, it exists
  try {
    readFileSync(filePath, 'utf-8');
    return true;
  } catch (e) {
    // File doesn't exist or can't be read
  }
  
  // Try relative path from project root
  if (filePath.startsWith(projectRoot)) {
    const relativePath = filePath.replace(projectRoot + '/', '').replace(projectRoot + '\\', '');
    try {
      readFileSync(relativePath, 'utf-8');
      return true;
    } catch (e) {
      // File doesn't exist
    }
  }
  
  // Try without extension
  const withoutExt = filePath.replace(/\.md$/, '');
  try {
    readFileSync(withoutExt, 'utf-8');
    return true;
  } catch (e) {
    // File doesn't exist
  }
  
  // Try with different extensions
  const extensions = ['.md', '.markdown', '.html', '.njk'];
  for (const ext of extensions) {
    try {
      readFileSync(withoutExt + ext, 'utf-8');
      return true;
    } catch (e) {
      // File doesn't exist
    }
    
    if (withoutExt.startsWith(projectRoot)) {
      const relativeWithoutExt = withoutExt.replace(projectRoot + '/', '').replace(projectRoot + '\\', '');
      try {
        readFileSync(relativeWithoutExt + ext, 'utf-8');
        return true;
      } catch (e) {
        // File doesn't exist
      }
    }
  }
  
  return false;
}

/**
 * Resolve a wikilink to a file path
 */
function resolveWikilink(linkPath, fromFile) {
  // Normalize the link path
  const normalizedLink = linkPath.toLowerCase().replace(/\s+/g, '-');
  
  // Try exact match first
  if (allMarkdownFiles.has(normalizedLink)) {
    return allMarkdownFiles.get(normalizedLink);
  }
  
  // Try with different separators and formats
  const variations = [
    normalizedLink,
    linkPath.toLowerCase(),
    linkPath,
    linkPath.replace(/\s+/g, '-'),
    linkPath.replace(/\s+/g, '_'),
  ];
  
  for (const variant of variations) {
    if (allMarkdownFiles.has(variant)) {
      return allMarkdownFiles.get(variant);
    }
  }
  
  // Try partial matches (filename contains the link)
  for (const [filename, fullPath] of allMarkdownFiles.entries()) {
    if (filename.includes(normalizedLink) || normalizedLink.includes(filename)) {
      return fullPath;
    }
  }
  
  // Try relative to current file
  const fromDir = dirname(fromFile);
  const relativePath = join(fromDir, linkPath + '.md');
  if (fileExists(relativePath)) {
    return relativePath;
  }
  
  // Try with different casing
  const lowerRelativePath = join(fromDir, linkPath.toLowerCase() + '.md');
  if (fileExists(lowerRelativePath)) {
    return lowerRelativePath;
  }
  
  // Try in parent directories
  let currentDir = fromDir;
  while (currentDir !== projectRoot) {
    const testPath = join(currentDir, linkPath + '.md');
    if (fileExists(testPath)) {
      return testPath;
    }
    const testPathLower = join(currentDir, linkPath.toLowerCase() + '.md');
    if (fileExists(testPathLower)) {
      return testPathLower;
    }
    currentDir = dirname(currentDir);
  }
  
  return null;
}

/**
 * Extract permalink from frontmatter
 */
function getPermalink(content) {
  const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (frontmatterMatch) {
    const frontmatter = frontmatterMatch[1];
    const permalinkMatch = frontmatter.match(/^permalink:\s*(.+)$/m);
    if (permalinkMatch) {
      let permalink = permalinkMatch[1].trim();
      // Remove .html extension and get directory
      permalink = permalink.replace(/\.html$/, '');
      // Remove leading slash
      permalink = permalink.replace(/^\//, '');
      return permalink;
    }
  }
  return null;
}

/**
 * Process a markdown file and extract links
 */
function processFile(filePath) {
  try {
    const content = readFileSync(filePath, 'utf-8');
    const relativePath = filePath.replace(projectRoot + '/', '');
    const permalink = getPermalink(content);
    
    // Extract markdown links [text](url)
    let match;
    while ((match = MARKDOWN_LINK_PATTERN.exec(content)) !== null) {
      const linkText = match[1];
      const linkUrl = match[2];
      // Use permalink directory if available, otherwise use file directory
      const baseDir = permalink ? resolve(projectRoot, dirname(permalink)) : dirname(filePath);
      const normalizedPath = normalizePath(linkUrl, filePath, baseDir);
      
      if (normalizedPath) {
        let exists = fileExists(normalizedPath);
        
        // If link has no extension and file doesn't exist, try directory with index.md
        if (!exists && !extname(linkUrl) && !linkUrl.endsWith('/')) {
          const dirIndexPath = normalizedPath.replace(/\.md$/, '/index.md');
          exists = fileExists(dirIndexPath);
        }
        
        if (!exists) {
          brokenLinks.push({
            file: relativePath,
            type: 'markdown',
            link: linkUrl,
            text: linkText,
            line: content.substring(0, match.index).split('\n').length
          });
        }
      } else {
        // normalizePath returned null - might be external URL or anchor
        // Skip these as they're not file links
      }
    }
    
    // Reset regex
    MARKDOWN_LINK_PATTERN.lastIndex = 0;
    
    // Extract wikilinks [[link]]
    while ((match = WIKILINK_PATTERN.exec(content)) !== null) {
      const linkText = match[1];
      // Handle wikilinks with aliases: [[link|alias]]
      const linkPath = linkText.split('|')[0].trim();
      
      const resolvedPath = resolveWikilink(linkPath, filePath);
      
      if (!resolvedPath || !fileExists(resolvedPath)) {
        brokenLinks.push({
          file: relativePath,
          type: 'wikilink',
          link: linkPath,
          text: linkText,
          line: content.substring(0, match.index).split('\n').length
        });
      }
    }
    
    // Reset regex
    WIKILINK_PATTERN.lastIndex = 0;
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

/**
 * Recursively find all markdown files
 */
function findMarkdownFiles(dir, fileList = []) {
  const files = readdirSync(dir, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = join(dir, file.name);
    
    // Skip node_modules, .git, and other common ignore directories
    if (file.isDirectory()) {
      if (file.name.startsWith('.') && file.name !== '.app') {
        continue;
      }
      if (file.name === 'node_modules') {
        continue;
      }
      findMarkdownFiles(fullPath, fileList);
    } else if (file.isFile() && file.name.endsWith('.md')) {
      fileList.push(fullPath);
    }
  }
  
  return fileList;
}

/**
 * Build index of all markdown files for wikilink resolution
 */
function buildFileIndex(markdownFiles) {
  for (const filePath of markdownFiles) {
    // Get filename without extension and directory
    const basename = filePath.split('/').pop().replace(/\.md$/, '');
    const normalized = basename.toLowerCase().replace(/\s+/g, '-');
    
    // Store multiple variations
    allMarkdownFiles.set(normalized, filePath);
    allMarkdownFiles.set(basename.toLowerCase(), filePath);
    allMarkdownFiles.set(basename, filePath);
    
    // Also store with underscores
    const withUnderscores = basename.toLowerCase().replace(/\s+/g, '_');
    if (withUnderscores !== normalized) {
      allMarkdownFiles.set(withUnderscores, filePath);
    }
  }
}

/**
 * Main function
 */
function main() {
  console.log('Scanning markdown files for broken links...\n');
  
  // Find all markdown files
  const markdownFiles = findMarkdownFiles(projectRoot);
  
  console.log(`Found ${markdownFiles.length} markdown files\n`);
  
  // Build file index for wikilink resolution
  buildFileIndex(markdownFiles);
  
  // Process each file
  for (const filePath of markdownFiles) {
    processFile(filePath);
  }
  
  // Report results
  if (brokenLinks.length === 0) {
    console.log('✅ All links are valid!');
  } else {
    console.log(`❌ Found ${brokenLinks.length} broken link(s):\n`);
    
    // Group by file
    const byFile = {};
    for (const broken of brokenLinks) {
      if (!byFile[broken.file]) {
        byFile[broken.file] = [];
      }
      byFile[broken.file].push(broken);
    }
    
    // Print grouped results
    for (const [file, links] of Object.entries(byFile)) {
      console.log(`📄 ${file}`);
      for (const link of links) {
        console.log(`   Line ${link.line}: [${link.type}] ${link.link}${link.text !== link.link ? ` (text: "${link.text}")` : ''}`);
      }
      console.log('');
    }
    
    process.exit(1);
  }
}

main();


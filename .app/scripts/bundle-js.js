import { Parcel } from "@parcel/core";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { readFileSync, writeFileSync } from "fs";

const args = process.argv.slice(2);
const isWatchMode = args.includes("--watch");

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, "..");
const outputFile = resolve(projectRoot, "dist/app.js");

function fixVmImport() {
  try {
    let content = readFileSync(outputFile, "utf8");
    // Replace external vm import with empty object
    content = content.replace(/import\s+\*\s+as\s+__parcelExternal\d+\s+from\s+["']vm["'];?/g, "const __parcelExternal0 = {};");
    writeFileSync(outputFile, content, "utf8");
    console.log("[JS] Fixed vm import");
  } catch (error) {
    // File might not exist yet, that's okay
  }
}

let bundler = new Parcel({
  entries: resolve(projectRoot, "js/app.js"),
  defaultTargetOptions: {
    distDir: resolve(projectRoot, "dist"),
    sourceMaps: isWatchMode,
    outputFormat: "esmodule",
    engines: {
      browsers: ["last 2 versions"],
    },
    shouldScopeHoist: false,
    shouldOptimize: false,
  },
  mode: isWatchMode ? "development" : "production",
  defaultConfig: "@parcel/config-default",
  watchDir: fileURLToPath(new URL("./../../", import.meta.url)),
});

if (isWatchMode) {
  bundler.watch((_error, event) => {
    if (event.type === "buildSuccess") {
      console.log("[JS] Build successful");
      fixVmImport();
    } else if (event.type === "buildFailure") {
      console.error("[JS] Build failed");
      console.warn(
        "Please fix the errors below. You may need to restart the server after resolving them."
      );
      console.error(event.diagnostics);
    }
  });
} else {
  const result = await bundler.run();
  if (result) {
    fixVmImport();
  }
}

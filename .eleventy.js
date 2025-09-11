// START 11TY imports
import eleventyNavigationPlugin             from "@11ty/eleventy-navigation";
import { InputPathToUrlTransformPlugin }    from "@11ty/eleventy";
import { eleventyImageTransformPlugin }     from "@11ty/eleventy-img";
import { EleventyHtmlBasePlugin }           from "@11ty/eleventy";
import pluginRss                            from "@11ty/eleventy-plugin-rss";
import pluginPwa from "eleventy-plugin-pwa-v2";
import faviconsPlugin from "eleventy-plugin-gen-favicons";
// END 11TY imports

// START LibDoc imports
import libdocConfig                         from "./_data/libdocConfig.js";
import libdocFunctions                      from "./_data/libdocFunctions.js";
// END LibDoc imports

export default function(eleventyConfig) {
  // START PLUGINS
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, libdocFunctions.pluginsParameters.eleventyImageTransform(), { useCache: true });
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(faviconsPlugin, {
    manifestData: {
      name: "Tag & Tally",
      short_name: "T+T",
      description: "Tag & Tally is a narrative-first tabletop RPG where every thing is defined by two things -- a sentence and a level. What's your line?",
      start_url: "/",
      display: "standalone",
      theme_color: "#000000",
      background_color: "#000000",
    }
  });
  eleventyConfig.addPlugin(pluginPwa, {
    cacheId: "tag-and-tally",
    globPatterns: ["**/*.{css,js,png,jpg,jpeg,gif,svg,webmanifest,json,ico,html}", "assets/**/*.{png,jpg,jpeg,gif,svg,css,js}"],
    runtimeCaching: [
      {
        // we always want fresh copy of the index page
        urlPattern: /\/$/,
        handler: "NetworkFirst",
      },
      {
        // we also want fresh copies of any HTML page
        urlPattern: /\.html$/,
        handler: "NetworkFirst",
      },
      {
        // we serve stale copies of static assets while they're refreshed
        urlPattern:
        /^.*\.(jpg|png|mp4|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/,
        handler: "StaleWhileRevalidate",
      },
    ],
  });
  // END PLUGINS

  // START FILTERS
  eleventyConfig.addAsyncFilter("autoids", libdocFunctions.filters.autoids);
  eleventyConfig.addAsyncFilter("embed", libdocFunctions.filters.embed);
  eleventyConfig.addAsyncFilter("cleanup", libdocFunctions.filters.cleanup);
  eleventyConfig.addAsyncFilter("dateString", libdocFunctions.filters.dateString);
  eleventyConfig.addAsyncFilter("datePrefixText", libdocFunctions.filters.datePrefixText);
  eleventyConfig.addAsyncFilter("toc", libdocFunctions.filters.toc);
  eleventyConfig.addAsyncFilter("sanitizeJSON", libdocFunctions.filters.sanitizeJson);
  eleventyConfig.addAsyncFilter("gitLastModifiedDate", libdocFunctions.filters.gitLastModifiedDate);
  // END FILTERS

  // START COLLECTIONS
  eleventyConfig.addCollection("myTags", libdocFunctions.collections.myTags);
  eleventyConfig.addCollection("postsByDateDescending", libdocFunctions.collections.postsByDateDescending);
  // END COLLECTIONS

  // START SHORTCODES
  eleventyConfig.addShortcode("alert", libdocFunctions.shortcodes.alert);
  eleventyConfig.addPairedShortcode("alertAlt", libdocFunctions.shortcodes.alert);
  eleventyConfig.addShortcode("embed", libdocFunctions.shortcodes.embed);
  eleventyConfig.addShortcode("icomoon", libdocFunctions.shortcodes.icomoon);
  eleventyConfig.addShortcode("icon", libdocFunctions.shortcodes.icon);
  eleventyConfig.addShortcode("iconCard", libdocFunctions.shortcodes.iconCard);
  eleventyConfig.addShortcode("sentence", libdocFunctions.shortcodes.sentence);
  eleventyConfig.addPairedShortcode("sandbox", libdocFunctions.shortcodes.sandbox);
  eleventyConfig.addPairedShortcode("sandboxFile", libdocFunctions.shortcodes.sandboxFile);
  // END SHORTCODES

  // START FILE COPY
  eleventyConfig.addPassthroughCopy("sandboxes");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("core/assets");
  eleventyConfig.addPassthroughCopy("favicon.png");
  // END FILE COPY
  
  return {
    pathPrefix: libdocConfig.htmlBasePathPrefix
  }
};
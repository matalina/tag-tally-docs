import syntaxHighlightPlugin from "@11ty/eleventy-plugin-syntaxhighlight";
import { markdownLibrary } from "./md.library.js";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import appData from "./../../_data/app.js";
import faviconsPlugin from "eleventy-plugin-gen-favicons";
import pluginPWA from "eleventy-plugin-pwa-v2";

export const core = {
  configObj: {
    pathPrefix: process.env.ELEVENTY_NOTES_PATH_PREFIX || undefined,
    markdownTemplateEngine: false,
  },

  /**
   * Sets up the core.
   * @param {import("@11ty/eleventy").UserConfig} config
   */
  setup(config) {
    config.setLibrary("md", markdownLibrary(config));

    config.addPlugin(EleventyHtmlBasePlugin);
    config.addPlugin(syntaxHighlightPlugin);

    config.addPlugin(faviconsPlugin, {
      manifestData: {
        name: "Tag & Tally",
        short_name: "Tag & Tally",
        description: "Tag & Tally is a narrative-first tabletop RPG where every thing is defined by two things -- a sentence and a level. What's your line?",
        start_url: "/",
        display: "standalone",
        theme_color: "#ffffff",
        background_color: "#ffffff",
      }
    });
    config.addPlugin(pluginPWA, {
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

    config.setServerOptions({
      watch: ["dist/app.js", "dist/app.css"],
    });

    config.setInputDirectory("./../");
    config.setOutputDirectory("dist");
    config.setDataDirectory(".app/_data");
    config.setIncludesDirectory(".app/lib");

    [".app/dist/", ".app/node_modules/", ...(appData().ignores ?? [])]
      .map((path) => `./../${path}`)
      .forEach((path) => {
        config.ignores.add(path);
        config.watchIgnores.add(path);
      });

    config.addWatchTarget("./../app.mjs");
  },
};

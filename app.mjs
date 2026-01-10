// @ts-check
import { defineConfig, createNotesQuery } from "./.app/app-config.js";

export default defineConfig({
  title: "Tag and Tally",
  description:
    "Tag and Tally is a narrative-first tabletop RPG where every thing is defined by two things &mdash; a sentence and a level. The sentence tells you what it is; The number tells you how tough they are.",
  staticAssets: {
    paths: { "assets/": "/" },
  },
  ignores: ["README.md", "CHANGELOG.md"],
  customProperties: {
    properties: [
      {
        path: "props",
        options: {
          date: {
            locale: "en-US",
          },
        },
      },
    ],
  },
  sidebar: {
    links: [
      {
        url: '/legal/',
        label: 'Legal',
        icon: 'file-text',
        openInNewTab: false,
      },
      {
        url: '/glossary/',
        label: 'Glossary',
        icon: 'book-open',
        openInNewTab: false,
      }
    ],
    sections: [
      {
        label: "Tag & Tally",
        groups: [
          {
            label: "Mechanics",
            url: "/mechanics/",
            expanded: false,
            query: createNotesQuery({
              pattern: "/mechanics/",
            }),
          },
          {
            label: "Guides",
            url: '/guides/',
            expanded: false,
            query: createNotesQuery({
              pattern: "/guides/",
            }),
          },
          {
            label: "Engines",
            url: '/engines/',
            expanded: false,
            query: createNotesQuery({
              pattern: "/engines/",
            }),
          },
          {
            label: "Settings",
            url: '/settings/',
            expanded: false,
            query: createNotesQuery({
              tags: ["settings"],
            }),
          },
          {
            label: "Random Tables",
            url: '/tables/',
            expanded: false,
            query: createNotesQuery({
              pattern: "/tables/",
            }),
          },
        ],
      },
    ],
  },
  tags: {
    map: {
      "dynamic-content": "dynamic content",
    },
  },
});

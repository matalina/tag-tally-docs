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
        'url': 'https://tagandtally.quest/legal',
        'label': 'Legal',
        'icon': 'file-text',
      }
    ],
    sections: [
      {
        label: "Tag & Tally",
        groups: [
          {
            label: "Mechanics",
            expanded: false,
            query: createNotesQuery({
              pattern: "/mechanics/",
            }),
          },
          {
            label: "Guides",
            expanded: false,
            query: createNotesQuery({
              pattern: "/guides/",
            }),
          },
          {
            label: "Engines",
            expanded: false,
            query: createNotesQuery({
              pattern: "/engines/",
            }),
          },
          {
            label: "Settings",
            expanded: false,
            query: createNotesQuery({
              tags: ["settings"],
            }),
          },
          {
            label: "Random Tables",
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

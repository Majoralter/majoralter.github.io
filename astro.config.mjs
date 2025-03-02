// @ts-check
import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";
import { remarkReadingTime } from './src/remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  site: "https://majoralter.github.io",

  // base: "https://github.com/Majoralter/majoralter.github.io",
  markdown: {
    shikiConfig: {
      theme: 'vesper'
    },
    remarkPlugins: [remarkReadingTime],
  },

  integrations: [mdx()]
});
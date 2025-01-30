// @ts-check
import { defineConfig } from 'astro/config';
import { remarkModifiedTime } from './src/remark-modified-time.mjs';
import { remarkReadingTime } from './src/remark-reading-time.mjs';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkModifiedTime, remarkReadingTime],
    shikiConfig: {
      theme: "kanagawa-dragon",
      defaultColor: false,
    },
  },
  integrations: [icon()],
  output: "server",
});

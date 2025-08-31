import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      source: "blog/*.md",
      type: "page",
      schema: z.object({
        title: z.string(),
        pubDate: z.date(),
      }),
    }),
    media: defineCollection({
      source: "media/**.json",
      type: "data",
      schema: z.object({
        title: z.string(),
        author: z.string().optional(),
        coverUrl: z.string(),
        type: z.string().default("Book"),
        rating: z.number(),
      }),
    }),
  },
});

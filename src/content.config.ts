import { defineCollection, z } from "astro:content";
import { glob, file } from 'astro/loaders'

const blog = defineCollection({
    loader: glob({pattern: "**/*.{md,mdx}", base: "./src/content/blog"}),
    schema: z.object({
        title: z.string(),
        pubDate: z.coerce.date(),
        lastUpdated: z.coerce.date().optional(),
        draft: z.boolean().default(false)
    })
})

const showcase = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/showcase" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    lastUpdated: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
    blog, showcase
}
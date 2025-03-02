import { defineCollection, z } from "astro:content";
import { glob, file } from 'astro/loaders'

const blog = defineCollection({
    loader: glob({pattern: "**/*.{md,mdx}", base: "./src/content/blog"}),
    schema: z.object({
        title: z.string(),
        pubDate: z.coerce.date(),
        lastUpdated: z.coerce.date().optional()
    })
})

export const collections = {
    blog
}
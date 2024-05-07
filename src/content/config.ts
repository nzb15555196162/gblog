import { defineCollection, z } from 'astro:content'
// import { Categories } from '../config.ts'
// const slugs = Categories.map(c => c.slug)
// const categories = z.enum(slugs as [string, ...string[]])

const posts = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        cardImage: z.string(),
        cardImage2: z.string().optional(),
        category: z.string(),
        pubDate: z.coerce.date(),
        selected: z.boolean().optional(),
        oldViewCount: z.number().optional(),
        tags: z.array(z.string()).optional(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
    }),
})

const categoryCollection = defineCollection({
    type: 'content',
    schema: () => z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string().optional(),
    }),
})

export const collections = { posts, categories: categoryCollection }

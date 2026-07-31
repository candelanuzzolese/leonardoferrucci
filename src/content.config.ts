import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const press = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/press' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    outlet: z.string(),
    url: z.string().url().optional(),
    category: z.string().default('Prensa'),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    author: z.string().default('WAYA S.A.'),
    tags: z.array(z.string()).default([]),
    seoTitle: z.string().optional(),
    keywords: z.array(z.string()).default([]),
  }),
});

export const collections = { press };

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string().max(160),
    description: z.string(),
    stack: z.array(z.string()).min(1),
    year: z.number().int(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    image: z.string().optional(),
    role: z.string().optional(),
  }),
});

export const collections = { projects };

import { defineCollection } from "astro:content";
import { z } from "zod";

const seeds = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

const tags = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  seeds,
  tags,
};

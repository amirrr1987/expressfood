import { z } from "zod"

export const commentSchema = z.object({
  user: z.string().optional(),
  text: z.string().optional(),
  score: z
    .number()
    .int()
    .gte(0)
    .describe("Age in years")
    .optional()
})

export const foodSchema = z.object({
  name: z.string(),
  descriptaion: z.string(),
  price: z
    .number()
    .int()
    .gte(0)
    .describe("Age in years")
    .optional(),
  pic: z.string()
})

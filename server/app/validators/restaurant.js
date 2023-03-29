const z = require("zod")

const commentSchema = z.object({
  user: z.string().optional(),
  text: z.string().optional(),
  score: z
    .number()
    .int()
    .gte(0)
    .describe("Age in years")
    .optional()
})

const foodSchema = z.object({
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

const restaurantSchema = z.object({
  name: z.string(),
  descriptaion: z.string(),
  score: z
    .number()
    .int()
    .gte(0)
    .describe("Age in years")
    .optional(),
  address: z.string(),
  pic: z.string(),
  comments: z.array(commentSchema),
  menus: z.array(foodSchema)
})

class Restaurant {

  constructor() {
    this.restaurantSchema = restaurantSchema
  }

  HandelRestaurantCreate({ data }) {
    return this.restaurantSchema.safeParse(data)
  }
}

module.exports = new Restaurant
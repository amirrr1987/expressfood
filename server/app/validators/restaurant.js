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
  description: z.string(),
  price: z
    .number()
    .int()
    .gte(0)
    .describe("Age in years")
    .optional(),
  pic: z.string()
})

const createRestaurantSchema = z.object({
  name: z.string().min(3),
  description: z.string().min(3),
  adminUsername: z.string().min(3),
  adminPassword: z.string().min(3),
  address: z.string().optional(),
})

const updateRstaurantSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  address: z.string().optional(),
  adminUsername: z.string().optional(),
  adminPassword: z.string().optional(),
})

class RestaurantValidator {

  // constructor() {
  //   this.createRestaurant = createRestaurantSchema
  //   this.updateRstaurant = updateRstaurantSchema
  // }

  create({ data }) {
    return createRestaurantSchema.safeParse(data)
  }
  update({ data }) {
    return updateRstaurantSchema.safeParse(data)
  }
}

module.exports = new RestaurantValidator
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
  name: z.string(),
  description: z.string(),
  address: z.string().optional(),
  adminUsername: z.string(),
  adminPassword: z.string(),
})

const updateRstaurantSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  address: z.string().optional(),
  adminUsername: z.string().optional(),
  adminPassword: z.string().optional(),
})

class RestaurantValidator {

  constructor() {
    this.createRestaurant = createRestaurantSchema
    this.updateRstaurant = updateRstaurantSchema
  }

  create({ data }) {
    return this.createRestaurant.safeParse(data)
  }
  update({ data }) {
    return this.updateRstaurant.safeParse(data)
  }
}

module.exports = new RestaurantValidator
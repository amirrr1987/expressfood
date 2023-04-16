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

const RestaurantSchema = z.object({
  _id: z.string().uuid(),
  name: z.string().optional(),
  description: z.string().optional(),
  address: z.string().optional(),
  adminUsername: z.string().optional(),
  adminPassword: z.string().optional(),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"], // 
})

class RestaurantValidator {

  constructor() {
    this.restaurant = RestaurantSchema
  }

  onCreate({ dataForValidation }) {
    return this.restaurant.safeParse(dataForValidation).omit({ _id: true })
  }
  onUpdate({ dataForValidation }) {
    return this.restaurant.safeParse(dataForValidation)
  }
}

module.exports = new RestaurantValidator()
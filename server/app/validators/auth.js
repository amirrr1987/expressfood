const z = require("zod")



const loginSchema = z.object({
  userName: z.string(),
  password: z.string()
})
const registerSchema = z.object({
  userName: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"], // path of error
});

class Restaurant {

  constructor() {
    this.loginSchema = loginSchema
    this.registerSchema = registerSchema
  }

  login({ data }) {
    return this.loginSchema.safeParse(data)
  }
  register({ data }) {
    return this.registerSchema.safeParse(data)
  }
}

module.exports = new Restaurant
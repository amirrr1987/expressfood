const z = require("zod")

const userSchema = z.object({
  userName: z.string(),
  password: z.string(),
  confirmPaasword: z.string(),
}).refine((data) => data.password === data.confirmPaasword, {
  message: "Passwords don't match",
  path: ["confirmPaasword"], // path of error
});
class User {
  constructor() {
    this.userSchema = userSchema
  }

  HandelUserCreate({ data }) {
    return this.userSchema.safeParse(data)
  }
}


module.exports = new User
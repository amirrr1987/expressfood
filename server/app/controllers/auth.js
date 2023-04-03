const UserModel = require("../models/user")
const AuthValidator = require("../validators/auth")
// const _ = require("loadash")
class AuthController {

  async login(req, res) {
    const { body } = req;
    const { error } = await AuthValidator.login({ data: body })
    if (error) return res.status(400).send({ message: error })
    // const one = await UserModel.findOne({ userName: body.userName })
    // if (!one) return res.status(400).send({ message: "not found" })
    // res.send(one)
  }
  async register(req, res) {
    const { body } = req;
    const { error } = AuthValidator.register({ data: body })
    if (error) return res.status(400).send({ message: error })
    let user = await UserModel.findOne({ userName: body.userName })
    if (user) return res.status(404).send({ message: 'you have account plz login' })
    console.log(user);
    // user = new UserModel(body)
    // user = await user.save()
    // res.send(user)

  }

}

module.exports = new AuthController
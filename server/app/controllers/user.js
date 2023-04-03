const UserModel = require("../models/user")
const UserValidator = require("../validators/user")
// const _ = require("loadash")
class User {
  async getList(req, res) {
    const list = await UserModel.find().select("name description score").limit(20)
    res.send({ list })
  }
  async getOne(req, res) {
    const { body } = req;
    const one = await UserModel.find({userName: body.userName})
    if (!one) return res.status(400).send({ message: "not found" })
    res.send(one)
  }
  async create(req, res) {
    const { body } = req;
    const { error } = await UserValidator.HandelUserCreate({ data: body })
    if (error) return res.status(400).send({ message: error })
    let user = await UserModel.findOne({userName: body.userName})
    if (user) return res.send({ message: 'user tekrari' })
    user = new UserModel(body)
    user = await user.save()
    res.send(user)

  }
  async update(req, res) {
    const { body, params } = req;
    const { error } = await UserValidator.HandelUserCreate({ data: body })
    if (error) return res.status(400).send({ message: error })
    const updatedUser = await UserModel.findByIdAndUpdate(params.id, {
      $set: body
    }, { new: true })
    if (!updatedUser) return res.status(404).send("not found")
    res.send(updatedUser)
  }
  async delete(req, res) {
    const { params } = req;
    const deletedUser = await UserModel.findByIdAndRemove(params.id)
    if (!deletedUser) return res.status(404).send({ message: "id not found" })
    res.status(200).send(deletedUser)

  }
}

module.exports = new User
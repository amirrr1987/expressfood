const RestaurantModel = require("@/models/restaurant")
const RestaurantValidator = require("@/validators/restaurant")
const _ = require("lodash")
const bcrypt = require("bcrypt")
const config = require("config");
const { EventBus } = require("@/utlis");
// const _ = require("loadash")
class RestaurantController {


  async getList(req, res) {
    // const list = await RestaurantModel.find().select("name description score").limit(20)
    const list = await RestaurantModel.find().select("name description score adminUsername pic address").limit(20)
    res.send({
      data: list,
      success: true,
      message: "Get all list"
    })
  }
  async getOne(req, res) {
    const { params } = req;
    const { id } = params
    const restaurant = await RestaurantModel.findById(id).select("-adminPassword")
    if (!restaurant) return res.status(400).send({
      message: "not found",
      success: false
    })
    res.send(restaurant)
  }
  async create(req, res) {
    const { body } = req;
    const bodyData = _.pick(body, ["name", "description", "adminUsername", "adminPassword", "address"])


    const { success, error } = await RestaurantValidator.create({ data: bodyData })
    if (!success) return res.status(400).send({ message: error.issues })




    const salt = await bcrypt.genSalt(config.get('salt'))
    bodyData.adminPassword = await bcrypt.hash(bodyData.adminPassword, salt)
    let restaurant = new RestaurantModel(bodyData)
    const obj = () => {
      return {
        ..._.pick(body, ["adminUsername", "adminPassword"]),
        role: 'agent'
      }
    }
    EventBus.emit('create-user', obj)

    // restaurant = await restaurant.save()


    // res.send({
    //   success: true,
    //   data: _.pick(restaurant, ["_id","name", "description", "adminUsername",]),
    //   message: 'restaurant created'
    // })
  }



  async update(req, res) {
    const { body, params } = req;
    const bodyData = _.pick(body, ["name", "description", "adminUsername", "adminPassword"])
    const { error } = await RestaurantValidator.update({ data: body })
    if (error) return res.status(400).send({ message: error })
    const restaurant = await RestaurantModel.findByIdAndUpdate(params.id, {
      $set: bodyData
    }, { new: true })
    if (!restaurant) return res.status(404).send({
      message: "Not found"
    })
    res.send({
      success: true,
      message: "User found",
      data: _.pick(restaurant, ["name", "description", "adminUsername", "adminPassword"])
    })
  }
  async delete(req, res) {
    const { params } = req;
    const restaurant = await RestaurantModel.findByIdAndRemove(params.id)
    if (!restaurant) return res.status(404).send({ message: "id not found" })
    res.status(200).send(
      {
        success: true,
        message: "user is delete"
      }
    )

  }
}

module.exports = new RestaurantController
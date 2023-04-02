const RestaurantModel = require("../models/restaurant")
const RestaurantValidator = require("../validators/restaurant")
// const _ = require("loadash")
class Restaurant {
  async getList(req, res) {
    // const list = await RestaurantModel.find().select("name description score").limit(20)
    const list = await RestaurantModel.find().limit(20)
    res.send({ list })
  }
  async getOne(req, res) {
    const { params } = req;
    const { id } = params
    const one = await RestaurantModel.findById(id)
    if (!one) return res.status(400).send({ message: "not found" })
    res.send(one)
  }
  async create(req, res) {
    const { body } = req;
    const { error } = await RestaurantValidator.HandelRestaurantCreate({ data: body })
    if (error) return res.status(400).send({ message: error })
    let restaurant = new RestaurantModel(body)
    await restaurant.save()
    // console.log(restaurant);
    res.send(restaurant)  
  }
  async update(req, res) {
    const { body, params } = req;
    const { error } = await RestaurantValidator.HandelRestaurantCreate({ data: body })
    if (error) return res.status(400).send({ message: error })
    const updatedRestaurant = await RestaurantModel.findByIdAndUpdate(params.id, {
      $set: body
    }, { new: true })
    if (!updatedRestaurant) return res.status(404).send("not found")
    res.send(updatedRestaurant)
  }
  async delete(req, res) {
    const { params } = req;
    const deletedRestaurant = await RestaurantModel.findByIdAndRemove(params.id)
    if(!deletedRestaurant) return res.status(404).send({message: "id not found"})
    res.status(200).send(deletedRestaurant)

  }
}

module.exports = new Restaurant
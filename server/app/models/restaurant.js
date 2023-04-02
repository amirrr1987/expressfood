const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
  user: {
    type: String
  },
  text: {
    type: String
  },
  score: {
    type: Number
  },
})
const foodSchema = new mongoose.Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  price: {
    type: Number
  },
  pic: {
    type: String
  },
  comments: [commentSchema]
})
const restaurantSchema = new mongoose.Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  score: {
    type: Number,
    default: 0
  },
  address: {
    type: String
  },
  pic: {
    type: String
  },
  comments: [commentSchema],
  menus: [foodSchema]
})

module.exports = mongoose.model("restaurant", restaurantSchema)


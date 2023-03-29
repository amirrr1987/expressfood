const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  score: {
    type: Number
  },
})
const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  descriptaion: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  pic: {
    type: String,
    required: true
  },
  comments: [commentSchema]
})
const restaurantSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: true
  },
  descriptaion:{
    type: String,
    required: true
  },
  score:{
    type: Number,
    default: 0
  },
  address:{
    type: String
  },
  pic:{
    type: String
  },
  comments:[commentSchema],
  menus: [foodSchema]
})

module.exports =  mongoose.model("restaurant",restaurantSchema)


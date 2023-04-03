const router = require("express").Router()
const restaurant = require("./restaurant")
const user = require("./user")
const auth = require("./auth")
router.use("/restaurant", restaurant)
router.use("/user", user)
router.use("/auth", auth)


module.exports = router
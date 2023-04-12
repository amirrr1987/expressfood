const router = require("express").Router()
const userController = require("@/controllers/user")


router.post("/login", userController.getOne)
router.post("/register", userController.create)


module.exports = router
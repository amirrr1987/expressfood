const router = require("express").Router()
const restaurantController = require("@/controllers/restaurant")
const userController = require("@/controllers/user")


// router.get("/", restaurantController.getList)
// router.get("/:id", restaurantController.getOne)
// router.post("/", restaurantController.create)
// router.put("/:id", restaurantController.update)
// router.delete("/:id", restaurantController.delete)

router.get("/", restaurantController.getList)
router.get("/:id", restaurantController.getOne)
router.post("",userController.create)



module.exports = router
const router = require("express").Router()
const restaurantController = require("../controllers/restaurant")


router.get("/", restaurantController.getList)
router.get("/:id", restaurantController.getOne)
router.post("/", restaurantController.create)
router.put("/:id", restaurantController.update)
router.delete("/:id", restaurantController.delete)


module.exports = router
const router = require("express").Router()
const restaurantController = require("../controllers/restaurant")


router.get("/", restaurantController.getList)
router.get("/:id", restaurantController.getOne)
router.post("/", restaurantController.create)
router.put("/", restaurantController.update)
router.delete("/", restaurantController.delete)


module.exports = router
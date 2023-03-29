const router = require("express").Router()
const userController = require("../controllers/user")


router.get("/", userController.getList)
router.get("/:id", userController.getOne)
router.post("/", userController.create)
router.put("/:id", userController.update)
router.delete("/:id", userController.delete)


module.exports = router
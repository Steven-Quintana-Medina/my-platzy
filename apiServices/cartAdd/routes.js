const controller = require("./controller");
const auth = require("../../middleware/auth");
const router = require("@awaitjs/express").Router();

router.postAsync("/", auth, controller.addProduct);
router.getAsync("/",auth, controller.getCart);
router.deleteAsync("/",auth,controller.removeProducts);
router.deleteAsync("/:id",auth,controller.removeProduct);

module.exports = router;

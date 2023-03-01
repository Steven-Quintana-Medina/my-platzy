const controller = require("./controller");
const auth = require("../../middleware/auth");
const router = require("@awaitjs/express").Router();

router.postAsync("/", auth, controller.createProducts);
router.getAsync("/", controller.getProduct);
router.postAsync("/:id", auth, controller.purcharse);

module.exports = router;

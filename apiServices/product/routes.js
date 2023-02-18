const controller = require("./controller");
const auth = require("../../middleware/auth");
const router = require("@awaitjs/express").Router();

router.postAsync("/", auth, controller.createCourses);
router.getAsync("/", controller.getCourses);
router.postAsync("/:id", auth, controller.purcharseCurse);

module.exports = router;

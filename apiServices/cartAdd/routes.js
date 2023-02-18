const controller = require("./controller");
const auth = require("../../middleware/auth");
const router = require("@awaitjs/express").Router();

router.postAsync("/", auth, controller.addCourse);
router.getAsync("/",auth, controller.getCart);
router.deleteAsync("/",auth,controller.removeCourses);
router.deleteAsync("/:id",auth,controller.removeCourse);

module.exports = router;

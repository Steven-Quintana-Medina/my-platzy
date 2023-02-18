const controller =  require("./controller");
const router = require("@awaitjs/express").Router();

router.postAsync('/',controller.createUsers);

module.exports = router;
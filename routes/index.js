const router = require("express").Router();
const user = require("../apiServices/user/routes");
const login = require("../services/login");
const product = require("../apiServices/product/routes");
const cart = require("../apiServices/cartAdd/routes");

router.use("/user", user);
router.use("/product", product);
router.use("/login", login);
router.use("/cart", cart);
module.exports = router;

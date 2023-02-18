const shoppingCart = require("./model");

module.exports = {
  async createCarts() {
    return await shoppingCart.create();
  },
};

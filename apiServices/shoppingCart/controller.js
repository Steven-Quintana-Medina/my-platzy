const dao = require("./dao");

module.exports = {
  async createCarts(req, res) {
    return await dao.createCarts();
  },
};

const Category = require("./model");

module.exports = {
  async createCategory(data) {
    return await Category.create(data);
  },
};

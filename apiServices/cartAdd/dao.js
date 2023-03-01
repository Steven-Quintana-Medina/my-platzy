const CartAdd = require("./model");
const Product = require("../product/model");
const category = require("../category/model");

module.exports = {
  async addProduct(data) {
    const validation = await CartAdd.findOne({
      where: { id_product: data.id_product, id_cart: data.id_cart },
    });
    if (!validation) {
      return await CartAdd.create(data);
    } else return false;
  },
  async getCart(id_cart) {
    return await CartAdd.findAll({
      where: { id_cart },
      include: [
        {
          model: Product,
          require: false,
          include: [{ model: category, require: true }],
        },
      ],
    });
  },
  async removeProducts(id_cart) {
    await CartAdd.destroy({ where: { id_cart }, truncate: true, cascade: false });
  },

  async removeProduct(data) {
    await CartAdd.destroy({
      where: { id_cart: data.id_cart, id_product: data.id_product },
    });
  },
};

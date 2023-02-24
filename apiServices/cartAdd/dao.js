const CartAdd = require("./model");
const Course = require("../product/model");
const category = require("../category/model");

module.exports = {
  async addCourse(data) {
    const validation = await CartAdd.findOne({
      where: { id_product: data.id_product, id_cart: data.id_cart },
    });
    if (!validation) {
      return await CartAdd.create(data);
    } else return false;
  },
  async getCart(id_cart) {
    return await CartAdd.findAll({
      where: { id:id_cart },
      include: [
        {
          model: Course,
          require: false,
          include: [{ model: category, require: true }],
        },
      ],
    });
  },
  async removeCourses(id_cart) {
    await CartAdd.destroy({ where: { id_cart }, truncate: true, cascade: false });
  },

  async removeCourse(data) {
    await CartAdd.destroy({
      where: { id_cart: data.id_cart, id_product: data.id_product },
    });
  },
};

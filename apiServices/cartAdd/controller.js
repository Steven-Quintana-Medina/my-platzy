const dao = require("./dao");
const dto = require("./dto");

module.exports = {
  async addCourse(req, res) {
    const id = req.body.id;
    const cart = await dao.addCourse({
      id_cart: req.token.id,
      id_product: id,
    });
    if (cart) res.status(201).send({ message: "data saved successfully" });
    else
      return res
        .status(202)
        .send({ message: "the course is already saved in the cart    " });
  },

  async getCart(req, res) {
    let cart = await dao.getCart(req.token.id);
    cart = JSON.stringify(cart, null, 2);
    cart = JSON.parse(cart);
    return res.status(200).send(dto.multiple(cart));
  },

  async removeCourses(req, res) {
    await dao.removeCourses(req.token.id);
    return res.status(200).send({ message: "data delete successfully" });
  },

  async removeCourse(req, res) {
    const { id } = req.params;
    await dao.removeCourse({
      id_cart: req.token.id,
      id_product: id,
    });
    return res.status(200).send({ message: "data delete successfully" });
  },
};

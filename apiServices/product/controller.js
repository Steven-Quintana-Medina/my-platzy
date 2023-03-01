const dao = require("./dao");
const dto = require("./dto");

module.exports = {
  async createProducts(req, res) {
    await dao.createProducts(
      {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
      },
      {
        category: req.body.category,
      }
    );

    res.status(201).send({ message: "data saved successfully" });
  },

  async getProduct(req, res) {
    let product = await dao.getProducts();
    product = JSON.stringify(product, null, 2);
    product = JSON.parse(product);
    return res.status(200).send(dto.multiple(product));
  },

  async purcharse(req, res) {
    await dao.purcharse({
      id: req.params.id,
      exp_month: req.body.exp_month,
      exp_year: req.body.exp_year,
      number: req.body.number,
      cvc: req.body.cvc,
      email: req.token.email,
      name: req.token.name,
      id_token: req.token.id,
    });

    res.status(201).send({ message: "purchase made" });
  },
};

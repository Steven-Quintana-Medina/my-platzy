const config = require("config");
const Product = require("./model");
const Category = require("../category/dao");
const category = require("../category/model");
const stripe = require("stripe")(config.get("server.stripe_key"));
const cart = require("../cartAdd/dao");

module.exports = {
  async createProducts(data, category) {
    product = await Product.create(data);
    category = await Category.createCategory(category);

    product.setCategory(category);
  },

  async getProducts() {
    return await Product.findAll({
      include: [{ model: category, require: true }],
    });
  },

  async getProduct(id) {
    return await Product.findOne({ where: { id } });
  },

  async purcharse(data) {
    const product = await this.getProduct(data.id);
    const paymentMethod = await stripe.paymentMethods.create({
      type: "card",
      card: {
        exp_month: data.exp_month,
        exp_year: data.exp_year,
        number: data.number,
        cvc: data.cvc,
      },
    });

    const customer = await stripe.customers.create({
      email: data.email,
      name: data.name,
      payment_method: paymentMethod.id,
    });

    await stripe.paymentIntents
      .create({
        amount: parseInt(product.price) * 100,
        currency: "COP",
        customer: customer.id,
        description: product.name,
        payment_method: paymentMethod.id,
        confirm: true,
      })
      .catch((e) => {
        res.status(202).send({ message: e });
      });

    await cart.removeProduct({
      id_cart: data.id_token,
      id_product: data.id,
    });

    console.log(data);
  },
};

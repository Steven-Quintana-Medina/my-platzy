const dao = require("./dao");
const dto = require("./dto");
const config = require("config");
const stripe = require("stripe")(config.get("server.stripe_key"));
const cart = require("../cartAdd/dao");

module.exports = {
  async createCourses(req, res) {
    await dao.createCourses(
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

  async getCourses(req, res) {
    let courses = await dao.getCourses();
    courses = JSON.stringify(courses, null, 2);
    courses = JSON.parse(courses);
    return res.status(200).send(dto.multiple(courses));
  },

  async purcharseCurse(req, res) {
    const { id } = req.params;
    const course = await dao.getCourse(id);

    const paymentMethod = await stripe.paymentMethods.create({
      type: "card",
      card: {
        exp_month: req.body.exp_month,
        exp_year: req.body.exp_year,
        number: req.body.number,
        cvc: req.body.cvc,
      },
    });

    const customer = await stripe.customers.create({
      email: req.token.email,
      name: req.token.name,
      payment_method: paymentMethod.id,
    });

    await stripe.paymentIntents.create({
      amount: parseInt(course.price) * 100,
      currency: "cop",
      customer: customer.id,
      description: course.name,
      payment_method: paymentMethod.id,
      confirm: true,
    }).catch((e)=>{
      res.status(202).send({message:e})
    })

    await cart.removeCourse({
      id_cart: req.token.id,
      id_product: id,
    });
    res.status(201).send({ message: "purchase made" });
  },
};

const dao = require("./dao");
const dto = require("./dto");
const bcrpt = require("bcryptjs");

module.exports = {
  async createUsers(req, res) {
    const user = await dao.createUsers({
      name: req.body.name,
      password: bcrpt.hashSync(req.body.password, 10),
      email: req.body.email,
      rol: req.body.rol,
    });
    if (user)
      return res.status(201).send({ message: "successfully registered user" });
    else return res.status(409).send({ message: "user already exists" });
  },
};

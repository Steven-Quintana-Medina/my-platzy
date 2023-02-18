const jwt = require("jsonwebtoken");
const config = require("config");

const auth = (req, res, next) => {
  let token = req.get("Authorization");
  token = token.slice(7);
  jwt.verify(token, config.get("token.SEED"), (err, decoded) => {
    if (err) {
      return res.status(401).send({ err });
    }
    req.token = decoded;
    next();
  });
};

module.exports = auth;

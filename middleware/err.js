const createError = require("http-errors");

const error404Handler = (req, res, next) => {
  next(createError(404));
};

const errorHandler = (err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") !== "production" ? err : {};

  res.status(err.status || 500);
  res.send({ message: err.message });
};

module.exports = { error404Handler, errorHandler };

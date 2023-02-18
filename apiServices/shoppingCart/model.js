const { DataTypes } = require("sequelize");
const sequelize = require("../../services/mysql/sequelize");
const User = require("../user/model");

const shoppingCart = sequelize.define(
  "shopping_cart",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_user: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
        onDelete: "cascade",
        onUpdate: "cascade",
      },
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

User.hasOne(shoppingCart, { foreignKey: "id_user" , as: "User"});
shoppingCart.belongsTo(User, { foreignKey: "id_user" , as: "User"});

module.exports = shoppingCart;

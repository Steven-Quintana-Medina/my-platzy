const { DataTypes } = require("sequelize");
const sequelize = require("../../services/mysql/sequelize");
const shoppingCart = require("../shoppingCart/model");
const Product = require("../product/model");

const CartAdd = sequelize.define(
  "cart_add",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    id_cart: {
      type: DataTypes.INTEGER,
      references: {
        model: "shopping_cart",
        key: "id",
        as: "shoppingCart",
        onDelete: "cascade",
        onUpdate: "cascade",
      },
    },

    id_product: {
      type: DataTypes.INTEGER,
      references: {
        model: "product",
        key: "id",
        as: "Product",
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

Product.hasMany(CartAdd,{foreignKey:"id_product"});
CartAdd.belongsTo(Product,{foreignKey:"id_product"});

shoppingCart.hasMany(CartAdd,{foreignKey:"id_cart"});
CartAdd.belongsTo(shoppingCart,{foreignKey:"id_cart"});

module.exports = CartAdd;

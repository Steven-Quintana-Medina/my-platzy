const { DataTypes } = require("sequelize");
const sequelize = require("../../services/mysql/sequelize");
const Category = require("../category/model");

const Product = sequelize.define(
  "product",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_category: {
      type: DataTypes.INTEGER,
      references: {
        model: "category",
        key: "id",
        as: "Category",
        onDelete: "cascade",
        onUpdate: "cascade",
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

Category.hasMany(Product, { foreignKey: "id_category" });
Product.belongsTo(Category, { foreignKey: "id_category" });

module.exports = Product;

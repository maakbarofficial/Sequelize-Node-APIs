const Sequelize = require("sequelize");
const sequelize = require("../db/database");

const Order = sequelize.define("order", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  total: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  customerId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "customer",
      key: "id",
    },
  },
});

module.exports = Order;

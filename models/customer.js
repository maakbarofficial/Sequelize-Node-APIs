const Sequelize = require("sequelize");
const sequelize = require("../db/database");
const Order = require("./order");

const Customer = sequelize.define("customer", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

// Establish a one-to-many relationship with Order
Customer.hasMany(Order, { foreignKey: "customerId" }); // A customer can have many orders
Order.belongsTo(Customer, { foreignKey: "customerId" }); // An order belongs to a customer

module.exports = Customer;

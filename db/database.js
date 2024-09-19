const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize("sqlite::memory:");

// Another way
const sequelize = new Sequelize("sequelizeDB", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;

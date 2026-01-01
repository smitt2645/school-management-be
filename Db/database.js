const { Sequelize } = require("sequelize");
require("dotenv").config();

// const sequelize = new Sequelize("school_inventory", "root", "", {
//   host: "localhost",
//   port: "3308",
//   dialect: "mysql",
// });

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    // port: process.env.PORT || 3306,
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
    logging: false,
  }
);

module.exports = sequelize;

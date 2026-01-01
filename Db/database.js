const { Sequelize } = require("sequelize");
require("dotenv").config();

// const sequelize = new Sequelize("school_inventory", "root", "", {
//   host: "localhost",
//   port: "3308",
//   dialect: "mysql",
// });

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

module.exports = sequelize;

module.exports = sequelize;

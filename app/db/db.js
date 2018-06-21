const Sequelize = require('sequelize')

const db = new Sequelize('placeever', 'placeever', 'test', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = {db}

//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'

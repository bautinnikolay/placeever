const Sequelize = require('sequelize')

const {db} = require('./../db/db')

const Users = db.define('Users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  place: {
    type: Sequelize.STRING
  },
  uid: {
    type: Sequelize.STRING,
    primaryKey: true
  }
}, {
  timestamps: false
});

module.exports = {Users}

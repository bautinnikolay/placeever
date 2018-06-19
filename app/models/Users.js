const Sequelize = require('sequelize')

const {db} = require('./../db/db')

const Users = db.define('Users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  place: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false 
});

module.exports = {Users}

const Sequelize = require('sequelize')

const {db} = require('./../db/db')

const Users = db.define('Users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  place: {
    type: Sequelize.STRING
  },
  uid: {
    type: Sequelize.STRING,
    primaryKey: true
  }
}, {
  validate: {
    nameNotNull() {
      if (this.name === null || this.name.length === 0) {
        throw new Error('User name is required!')
      }
    }
  },
  timestamps: false
});

module.exports = {Users}

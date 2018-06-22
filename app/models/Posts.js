const Sequelize = require('sequelize')

const {db} = require('./../db/db')

const Posts = db.define('Posts', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  author_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  place: {
    type: Sequelize.STRING,
    allowNull: false
  },
  text: {
    type: Sequelize.STRING
  },
  rate: {
    type: Sequelize.BOOLEAN,
    primaryKey: true,
    allowNull: false
  },
  is_news: {
    type: Sequelize.BOOLEAN,
    primaryKey: true,
    defaultValue: false
  },

}, {
  timestamps: false
})

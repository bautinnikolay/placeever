const Sequelize = require('sequelize')

const {db} = require('./../db/db')

const Posts = db.define('Posts', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  author_id: {
    type: Sequelize.INTEGER
  },
  place: {
    type: Sequelize.STRING
  },
  text: {
    type: Sequelize.STRING
  },
  rate: {
    type: Sequelize.BOOLEAN,
    primaryKey: true
  },
  is_news {
    type: Sequelize.BOOLEAN,
    primaryKey: true
  }
}, {
  timestamps: false
})

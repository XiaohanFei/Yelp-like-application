const Sequelize = require('sequelize')
const initModels = require("../schema/init-models")
const config = require('./config')

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'postgres',
  dialectOptions: {
    ssl: true
  },
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  },
  define: {
    timestamps: false
  }
})

// const sequelize = new Sequelize('postgres://pwspalfmopxqka:4a4e9c5dcf5170c4fd4e6f84f1958a978eb9b26ed8b097427612d8b3f7aa9edd@ec2-54-204-128-96.compute-1.amazonaws.com:5432/d2jm50v53p4apf')

module.exports = initModels(sequelize)
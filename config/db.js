const Sequelize = require('sequelize')
const initModels = require("../schema/init-models")
const config = require('./config')

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'postgres',
  dialectOptions: {
      ssl: {
          require: true,
          rejectUnauthorized: false
      }
  },
  define: {
    timestamps: false
  }
})

module.exports = initModels(sequelize)
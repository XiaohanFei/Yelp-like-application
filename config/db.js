const Sequelize = require('sequelize')
const initModels = require("../schema/init-models")
const config = require('./config')

// const sequelize = new Sequelize(config.database, config.username, config.password, {
//   host: config.host,
//   dialect: 'postgres',
//   dialectOptions: {
//     ssl: true
//   },
//   // pool: {
//   //   max: 5,
//   //   min: 0,
//   //   idle: 30000
//   // },
//   driver: "pg",
//   define: {
//     timestamps: false
//   }
// })

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  ssl: {
    rejectUnauthorized: false
  }
})

module.exports = initModels(sequelize)
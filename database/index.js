const Sequelize = require('sequelize');
const pg = require('pg')
require('dotenv').config();
require('dotenv').load();

const db = new Sequelize(process.env.POSTGRESS_URL, {
  dialect: 'postgres',
  pool: {
    max: 3,
    min: 0,
    idle: 1000
  }
})

db.authenticate()
  .then(success =>{
    console.log('the db is connected to ESquel')
  })
  .catch(err =>{
    console.log('the db is not connected', err)
  })

module.exports = db;
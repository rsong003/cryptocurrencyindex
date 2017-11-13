const Sequelize = require('sequelize');
const db = require('./index.js');


const Users = db.define('Users', {
  username: {
    type: Sequelize.STRING,
    //allowNull: true,
  },
  password: {
    type: Sequelize.STRING,
    // allowNull: true
  },
  Bitcoin: {
    type: Sequelize.FLOAT,
    // allowNull: true,
  },
  Ethereum: {
    type: Sequelize.FLOAT,
    // allowNull: true
  },
  Ripple: {
    type: Sequelize.FLOAT,
    // allowNull: true
  },
  BitcoinCash: {
    type: Sequelize.FLOAT,
    // allowNull: true
  },
  Litecoin: {
    type: Sequelize.FLOAT,
    // allowNull: true
  },
  Dash: {
    type: Sequelize.FLOAT,
    // allowNull: true
  },
  NEM: {
    type: Sequelize.FLOAT,
    // allowNull: true
  },
  ETC: {
    type: Sequelize.FLOAT,
    // allowNull: true
  },
  NEO: {
    type: Sequelize.FLOAT,
    // allowNull: true
  },
  Monero: {
    type: Sequelize.FLOAT,
    // allowNull: true
  },
  rating:{
    type: Sequelize.FLOAT,
  },
  imageURL:{
    type: Sequelize.STRING,
  }
},
{
  timestamps: false
})


// Users.sync();
//
Users.sync({force:true});
module.exports = Users;

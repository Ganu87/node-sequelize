//const {Sequelize,DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const Customer = require('./customer');
const Order = require('./order');

const db = { sequelize, Customer, Order };

sequelize.sync({alter:true})
    .then(()=> console.log("database tables are synced"))
    .catch(err => console.log("error occured while sync DB objects "+err));

 module.exports = db;   
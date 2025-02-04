const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const Customer = require('./customer');

const Order = sequelize.define('Order',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    product_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    amount:{
        type:DataTypes.FLOAT,
        allowNull:false
    }
},{
    timestamps:true
});

/// mentioned foreign key relationship

Customer.hasMany(Order,{foreignKey:'customerId'});
Order.belongsTo(Customer,{foreignKey:'customerId'});

module.exports = Order;
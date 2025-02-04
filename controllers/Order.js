const {Order} = require('../models');

async function createOrder(req,res) {

    try {
        const order = await Order.create(req.body);
        res.status(201).json(order);
    } catch (error) {
        console.log("Error : Issue in create order "+error);
        res.status(500).json({message:"Issue in creating Order"});
    }
    
}

async function getAllOrders(req,res) {
    try {
        const order = await Order.findAll();
        if(!order){
            res.status(400).json({message:"No orders found"});
        }
        res.status(200).json({order});
    } catch (error) {
        console.log("Error : Issue in getAllOrders  "+error);
        req.status(500).json({message:"Issue in getAllOrders "});
    }
}

module.exports = {
    createOrder,
    getAllOrders
}
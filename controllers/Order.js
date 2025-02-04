const Order = require('../models');

async function createOrder(req,res) {

    try {
        const order = await Order.create(req.body);
        res.status(201).json(order);
    } catch (error) {
        console.log("Error : Issue in create order "+error);
        req.status(500).json({message:"Issue in creating Order"});
    }
    
}

module.exports = {
    createOrder
}
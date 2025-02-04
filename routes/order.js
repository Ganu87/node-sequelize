const express = require('express');
const router = express.Router();
const orderController = require('../controllers/Order');

router.post('/',orderController.createOrder);
router.get('/',orderController.getAllOrders);

module.exports = router;
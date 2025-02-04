const express = require('express');
const router = express.Router();
const orderController = require('../controllers/Order');

router.post('/',orderController.createOrder);

module.exports = router;
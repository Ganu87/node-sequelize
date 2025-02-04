const express = require('express');
const router = express.Router();
const customerController = require('../controllers/Customer');


router.post('/',customerController.createCustomer);
router.get('/:id',customerController.getCustomerById);
router.get('/',customerController.getAllCustomers);
router.delete('/:id',customerController.deleteCustomerById)

module.exports = router;
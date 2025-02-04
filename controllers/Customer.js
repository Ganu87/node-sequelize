const { Customer } = require('../models');
console.log('custsomer controller start');
async function createCustomer(req, res) {
    try {
        console.log('inside createCustomer method ', req.body);
        const customer = await Customer.create(req.body);
        res.status(201).json(customer);
    } catch (error) {
        console.log('Error : creating customer ' + error);
        res.status(500).json({ message: 'Error occured while creating customer' + error })
    }

}

async function getCustomerById(req, res) {
    try {
        const id = req.params.id;
        const customer = await Customer.findByPk(id);
        if (!customer) {
            return res.status(404).json({
                success: false,
                message: `Customer with ID ${id} not found`
            });
        }
        res.status(200).json(customer);
    } catch (error) {
        console.log('Error : getCustomerById ' + error);
        res.status(500).json({ message: 'Error occured while getting customer' + error })
    }
}

async function getAllCustomers(req,res) {
    try {
            const customer = await Customer.findAll();
            if(!customer){
                return res.status(404).json({
                    success: false,
                    message: `Customer with ID ${id} not found`
                });
            }
            res.status(200).json(customer);
    } catch (error) {
        console.log('Error : getAllCustomers ' + error);
        res.status(500).json({ message: 'Error occured while getting getAllCustomers' + error })
    }
}

async function deleteCustomerById(req,res) {
    try {
        const id = req.params.id;
        const customer = await Customer.destroy({where:{id}});
        if (!customer) {
            return res.status(404).json({
                success: false,
                message: `Customer with ID ${id} not found`
            });
            res.status(200).json({ message: 'Deleted successfully' });

        }
    } catch (error) {
        console.log('Error : deleteCustomerById ' + error);
        res.status(500).json({ message: 'Error occured while  deleteCustomerById' + error })
    }
}

module.exports = {
    createCustomer,
    getCustomerById,
    getAllCustomers,
    deleteCustomerById,
}

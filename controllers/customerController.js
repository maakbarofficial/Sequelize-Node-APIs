const Customer = require("../models/customer");

async function createCustomer(req, res) {
  const { name, email } = req.body;
  try {
    const customer = await Customer.create({ name, email });
    res.status(201).json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getAllCustomers(req, res) {
  try {
    const customers = await Customer.findAll();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateCustomer(id, newName, newEmail) {
  try {
    const customer = await Customer.findByPk(id);
    if (customer) {
      customer.name = newName;
      customer.email = newEmail;
      await customer.save();
      console.log("Customer updated:", customer);
    } else {
      console.log("Customer not found");
    }
  } catch (error) {
    console.error("Error updating customer:", error);
  }
}

async function deleteCustomer(id) {
  try {
    const result = await Customer.destroy({ where: { id } });
    if (result) {
      console.log("Customer deleted");
    } else {
      console.log("Customer not found");
    }
  } catch (error) {
    console.error("Error deleting customer:", error);
  }
}

module.exports = {
  createCustomer,
  getAllCustomers,
  updateCustomer,
  deleteCustomer,
};

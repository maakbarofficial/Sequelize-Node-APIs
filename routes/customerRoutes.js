const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");

// Create a new customer
router.post("/", customerController.createCustomer);

// Get all customers
router.get("/", customerController.getAllCustomers);

// Update a customer by ID
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  customerController
    .updateCustomer(id, name, email)
    .then(() => res.sendStatus(204))
    .catch((err) => res.status(500).json(err));
});

// Delete a customer by ID
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  customerController
    .deleteCustomer(id)
    .then(() => res.sendStatus(204))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;

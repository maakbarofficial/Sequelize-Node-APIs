const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// Create a new order
router.post("/", orderController.createOrder);

// Get all orders
router.get("/", orderController.getAllOrders);

// Update an order by ID
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { total } = req.body;
  orderController
    .updateOrder(id, total)
    .then(() => res.sendStatus(204))
    .catch((err) => res.status(500).json(err));
});

// Delete an order by ID
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  orderController
    .deleteOrder(id)
    .then(() => res.sendStatus(204))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;

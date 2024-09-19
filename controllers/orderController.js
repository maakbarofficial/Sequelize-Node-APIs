const Order = require("../models/order");

async function createOrder(req, res) {
  const { total, customerId } = req.body;
  try {
    const order = await Order.create({ total, customerId });
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getAllOrders(req, res) {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateOrder(id, newTotal) {
  try {
    const order = await Order.findByPk(id);
    if (order) {
      order.total = newTotal;
      await order.save();
      console.log("Order updated:", order);
    } else {
      console.log("Order not found");
    }
  } catch (error) {
    console.error("Error updating order:", error);
  }
}

async function deleteOrder(id) {
  try {
    const result = await Order.destroy({ where: { id } });
    if (result) {
      console.log("Order deleted");
    } else {
      console.log("Order not found");
    }
  } catch (error) {
    console.error("Error deleting order:", error);
  }
}

module.exports = {
  createOrder,
  getAllOrders,
  updateOrder,
  deleteOrder,
};

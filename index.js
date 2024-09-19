const express = require("express");
const sequelize = require("./db/database");
const customerRoutes = require("./routes/customerRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/customers", customerRoutes);
app.use("/orders", orderRoutes);

// Sync the database and start the server
(async () => {
  try {
    await sequelize.sync(); // Use { force: true } only for development
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
})();

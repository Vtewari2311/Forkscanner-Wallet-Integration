const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const nodeRoutes = require("./routes/nodeRoutes");

// Middleware
app.set("view engine", "ejs");

// Routes
app.use("/", nodeRoutes);

// Server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

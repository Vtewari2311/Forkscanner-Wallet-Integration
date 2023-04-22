// Import necessary modules
const express = require("express");
const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");

// Import routes
const nodeRoutes = require("./routes/nodeRoutes");

// Create an instance of the express app
const app = express();

// Set view engine to EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Set up logger middleware
app.use(logger("dev"));

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Set up routing middleware
app.use("/nodes", nodeRoutes);

// Handle 404 errors
app.use((req, res, next) => {
  const err = new Error("Page Not Found");
  err.status = 404;
  next(err);
});

// Handle other errors
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  res.status(statusCode);
  res.render("errorView", {
    message: err.message,
    error: app.get("env") === "development" ? err : {}
  });
});

// Start server
const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${server.address().port}`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("Server is shutting down");
  server.close(() => {
    console.log("Server has shut down");
    process.exit(0);
  });
});

// Catch unhandled rejections and throw a 500 error
process.on("unhandledRejection", (err) => {
  console.error(err);
  process.exit(1);
});

// Catch uncaught exceptions and throw a 500 error
process.on("uncaughtException", (err) => {
  console.error(err);
  process.exit(1);
});

// Export app
module.exports = app;


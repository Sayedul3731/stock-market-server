const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); // for parsing application/json

// Import routes
const userRoutes = require("./route");

// Use the routes
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

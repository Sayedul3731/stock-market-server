const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); // for parsing application/json

// Import routes
const userRoutes = require("./route");

// Use the routes
app.use("/", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
// app.get("/users", async (req, res) => {
//   try {
//     const users = await prisma.user.findMany();
//     res.json(users);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to fetch users" });
//   }
// });

// app.post("/users", async (req, res) => {
//   try {
//     const { name, email } = req.body;
//     const newUser = await prisma.user.create({
//       data: { name, email },
//     });
//     res.json(newUser);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to create user" });
//   }
// });

// app.get("/stocks", async (req, res) => {
//   try {
//     const stockData = await prisma.stock.findMany();
//     res.json(stockData);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to fetch stocks" });
//   }
// });

// app.post("/stocks", async (req, res) => {
//   try {
//     const { date, trade_code, high, low, open, close, volume } = req.body;
//     const newStockData = await prisma.stock.create({
//       data: {
//         date,
//         trade_code,
//         high,
//         low,
//         open,
//         close,
//         volume,
//       },
//     });
//     res.json(newStockData);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to create stock" });
//   }
// });

// app.delete("/stocks/:id", async (req, res) => {
//   const id = req.params.id;
//   try {
//     const result = await prisma.stock.delete({
//       where: {
//         id: Number(id),
//       },
//     });
//     res.json(result);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to delete stock" });
//   }
// });

// app.put("/stocks/:id", async (req, res) => {
//   const id = req.params.id;
//   const { date, trade_code, high, low, open, close, volume } = req.body;
//   try {
//     const result = await prisma.stock.update({
//       where: {
//         id: Number(id),
//       },
//       data: {
//         date,
//         trade_code,
//         high,
//         low,
//         open,
//         close,
//         volume,
//       },
//     });
//     res.json(result);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to update stock" });
//   }
// });

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.post("/users", async (req, res) => {
  const { name, email } = req.body;
  const newUser = await prisma.user.create({
    data: { name, email },
  });
  res.json(newUser);
});
app.get("/stocks", async (req, res) => {
  const stockData = await prisma.stock.findMany();
  res.json(stockData);
});
app.post("/stocks", async (req, res) => {
  const { date, trade_code, high, low, open, close, volume } = req.body;
  const newStockData = await prisma.stock.create({
    data: {
      date,
      trade_code,
      high,
      low,
      open,
      close,
      volume,
    },
  });
  res.json(newStockData);
});
app.listen(3001, () => {
  console.log("Server is running on 3001");
});

const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});
router.post("/users", async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = await prisma.user.create({
      data: { name, email },
    });
    res.json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create user" });
  }
});
router.post("/stocks", async (req, res) => {
  try {
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
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create stock" });
  }
});
router.get("/stocks", async (req, res) => {
  try {
    const stockData = await prisma.stock.findMany();
    res.json(stockData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch stocks" });
  }
});
module.exports = router;

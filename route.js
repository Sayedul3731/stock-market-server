const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

let users = [
  { id: 1, name: "John Doe", email: "john.doe@example.com" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
];

// Get all users
router.get("/all", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});
router.post("/users", async (req, res) => {
  const { name, email } = req.body;
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
    },
  });
  res.json(newUser);
});
// Get a user by ID
router.get("/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send("User not found");
  res.json(user);
});

// Create a new user
router.post("/", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Update an existing user
router.put("/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send("User not found");

  user.name = req.body.name;
  user.email = req.body.email;
  res.json(user);
});

// Delete a user
router.delete("/:id", (req, res) => {
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).send("User not found");

  const deletedUser = users.splice(userIndex, 1);
  res.json(deletedUser[0]);
});

module.exports = router;

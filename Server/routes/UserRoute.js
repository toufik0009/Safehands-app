const express = require("express");
const db = require("../db");
require("dotenv").config();

const UserRoute = express.Router();
// Add a new user
UserRoute.post("/users", (req, res) => {
  const { username, email, password, phone } = req.body;
  const sql =
    "INSERT INTO users (username, email, password, phone) VALUES (?, ?, ?, ?)";
  db.query(sql, [username, email, password, phone], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "User added successfully", userId: result.insertId });
  });
});

module.exports = UserRoute;

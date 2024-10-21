// ContactRoute.js
const express = require("express");
const db = require("../db"); 
require("dotenv").config();

const ContactRoute = express.Router(); 

// Get all contacts
ContactRoute.get("/contacts", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});



module.exports = ContactRoute;

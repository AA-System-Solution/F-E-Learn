const express = require('express');
const router = express.Router(); // Create an Express router
const data = require('../data-schema.js');

// Define your route handlers using the router object
router.get("/", (req, res) => {
  res.render("home");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/wall", (req, res) => {
  res.render("wall");
});

router.get("/courses", (req, res) => {
  res.render("courses");
});

router.get("/lessons", (req, res) => {
  res.render("lessons");
});

router.get("/subscribe", (req, res) => {
  res.render("subscribe");
});

router.get("/study", (req, res) => {
  res.render("study");
});

router.get("/quiz", (req, res) => {
  res.render("quiz");
});

module.exports = router; // Export the router object

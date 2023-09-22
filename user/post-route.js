const express = require('express');
const router = express.Router();
const passport = require("passport");
const User = require('./user-schema.js'); // Adjust the path as needed
const data = require('../data-schema.js');

// Register route
router.post("/register", (req, res) => {
  console.log(req.body);

  const newUser = new User({
    username: req.body.username,
    full_name: req.body.full_name,
    user_num: req.body.stud_number,
    parent_num: req.body.parent_num,
    gender: req.body.gender,
  });

  User.register(newUser, req.body.password)
    .then((user) => {
      passport.authenticate("local")(req, res, () => {
        res.redirect("/wall");
      });
    })
    .catch((err) => {
      console.error(err);
      res.redirect("/");
    });
});

// Login route
router.post("/login", (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password
  });

  req.login(user, (err) => {
    if (err) {
      console.log(err);
    } else {
      passport.authenticate("local")(req, res, () => {
        res.redirect("/wall");
      });
    }
  });
});

module.exports = router;

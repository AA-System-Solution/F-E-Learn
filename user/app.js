const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const fs = require('fs');
const fileUpload = require('express-fileupload');
const path = require("path");

const data = require('../data-schema.js');


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.use('/uploads', express.static('uploads'));


app.use(fileUpload({
  safeFileNames: true
}));


app.use(function(req, res, next) {
  res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.header('Pragma', 'no-cache');
  res.header('Expires', 0);
  next();
});




mongoose.connect('mongodb://127.0.0.1:27017/fede7a').then(() => {
  console.log("connected to database");
});



app.get("/", (req, res) => {

  res.render("home")

});










app.use((req, res, next) => {
  res.status(404).render('404', {
    url: req.originalUrl
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('500', {
    error: err,
    showError: true
  });
});

app.listen("3000", () => {
  console.log("server runing in port 3000");
});

// requires.js

// Import necessary modules
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const session = require('express-session');
const fs = require('fs');
const fileUpload = require('express-fileupload');
const path = require("path");
const useragent = require('express-useragent');
const get_route = require("./get-route.js");
const post_route = require("./post-route.js");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require("passport");
const passportLocalMongoose = require('passport-local-mongoose');
const findOrCreate = require("mongoose-findorcreate");


// Export the modules for use in other parts of your application
module.exports = {
  express,
  bodyParser,
  ejs,
  session,
  fs,
  fileUpload,
  path,
  useragent,
  get_route,
  post_route,
  router,
  mongoose,
  passport,
  passportLocalMongoose,
  findOrCreate
};

const mongoose = require('mongoose');
const passport = require("passport");
const passportLocalMongoose = require('passport-local-mongoose');
const findOrCreate = require("mongoose-findorcreate");

// Define the User Schema
const userSchema = new mongoose.Schema({
  userName: String,
  full_name: String,
  password: String,
  user_num: String,
  parent_num: String,
  gender: String,
  googleID: String,
});

// Apply Passport plugins
userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

// Create the User model
const User = mongoose.model("User", userSchema);

// Configure Passport
passport.use(User.createStrategy());
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => {
      done(err, null);
    });
});

module.exports = User;

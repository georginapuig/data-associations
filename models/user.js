const mongoose = require('mongoose');

// USER - email, name
const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }
  ]
});
const User = mongoose.model("User", userSchema);

module.exports = User;
const mongoose = require('mongoose'); // npm install mongoose --save

// mongoose setup
mongoose.connect('mongodb://localhost:27017/blog_demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to DB!'))
  .catch(error => console.log(error.message));

// USER - email, name
// schema setup
const userSchema = new mongoose.Schema({
  email: String,
  name: String
});

// model
const User = mongoose.model("User", userSchema);

const mongoose = require('mongoose'); // npm install mongoose --save

// mongoose setup
mongoose.connect('mongodb://localhost:27017/blog_demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to DB!'))
  .catch(error => console.log(error.message));

// USER - email, name
const userSchema = new mongoose.Schema({
  email: String,
  name: String
});
const User = mongoose.model("User", userSchema);

// POST - title, content
const postSchema = new mongoose.Schema({
  title: String,
  content: String
});
const Post = mongoose.model("Post", postSchema);

// check if user model works
// const newUser = new User({
//   email: 'charlie@brown.edu',
//   name: 'Charlie'
// });

// newUser.save(function(err, user) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });

// const newPost = new Post({
//   title: 'Reflections on apple',
//   content: 'They are delicious'
// });

// newPost.save(function(err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

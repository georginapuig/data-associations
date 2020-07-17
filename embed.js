const mongoose = require('mongoose'); // npm install mongoose --save

// mongoose setup
mongoose.connect('mongodb://localhost:27017/blog_demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to DB!'))
  .catch(error => console.log(error.message));

// POST - title, content
const postSchema = new mongoose.Schema({
  title: String,
  content: String
});
const Post = mongoose.model("Post", postSchema);

// USER - email, name
const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema]
});
const User = mongoose.model("User", userSchema);

// check if user model works
// const newUser = new User({
//   email: 'hermione@brown.edu',
//   name: 'Hermione'
// });

// newUser.posts.push({
//   title: 'How to potion',
//   content: 'jk, go to potions class to learn it'
// });

// newUser.save(function(err, user) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });

// check if post model works
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

User.findOne({name: 'Hermione'}, function(err, user) {
  if (err) {
    console.log(err);
  } else {
    console.log(user);
  }
});
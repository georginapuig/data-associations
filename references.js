const mongoose = require('mongoose'); // npm install mongoose --save
const Post = require('./models/post');
const User = require('./models/user');

// mongoose setup
mongoose.connect('mongodb://localhost:27017/blog_demo_2', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to DB!'))
  .catch(error => console.log(error.message));

// User.create({
//   email: 'bob@gmail.com',
//   name: 'Bob Belcher'
// });

// Post.create({
//   title: 'How to cook the best burguer pt. 4',
//   content: 'lalalala alallala'
// }, function(err, post) {
//   User.findOne({email: 'bob@gmail.com'}, function(err, foundUser) {
//     if (err) {
//       console.log(err);
//     } else {
//       foundUser.posts.push(post);
//       foundUser.save(function(err, data) {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log(data);
//         }
//       });
//     }
//   });
// });

// find user
// find all post for that user
// User.findOne({email: 'bob@gmail.com'}).populate('posts').exec(function(err, user) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });
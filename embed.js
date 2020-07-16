const mongoose = require('mongoose'); // npm install mongoose --save

// mongoose setup
mongoose.connect('mongodb://localhost:27017/blog_demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to DB!'))
  .catch(error => console.log(error.message));

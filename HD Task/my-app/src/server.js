const express = require('express');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a Comment schema
const commentSchema = new mongoose.Schema({
  email: String,
  status: String,
  comment: String,
  reviewIndex: Number,
});

// Create a Comment model
const Comment = mongoose.model('Comment', commentSchema);

const app = express();
const port = 3001;

app.use(express.json());

// Handle POST request to '/comment'
app.post('/comment', (req, res) => {
  const { email, status, comment, reviewIndex } = req.body;

  // Create a new comment instance
  const newComment = new Comment({
    email,
    status,
    comment,
    reviewIndex,
  });

  // Save the comment to MongoDB
  newComment.save((err, comment) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving comment to database');
    } else {
      res.status(200).send('Comment saved to database');
    }
  });
});

// Handle GET request to '/comment'
app.get('/comment', (req, res) => {
  Comment.find({})
    .exec()
    .then((comments) => {
      res.json(comments);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving comments from database');
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

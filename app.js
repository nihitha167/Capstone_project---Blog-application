const express = require('express');
const app = express();
const data = require('./data'); // Import the data module
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  const posts = data.getPosts();
  res.render('index', { title: 'Capstone Project - My Blog Application ', posts });
});

app.get('/post/:id', (req, res) => {
    const post = data.getPostById(req.params.id);
    res.render('post', { title: post.title, post, postId: post.id }); // Pass postId
  });

app.get('/new', (req, res) => {
  res.render('new', { title: 'New Post' });
});

app.post('/create', (req, res) => {
  const { title, content, date, author } = req.body;
  const newPost = { id: data.getPosts().length + 1, title, content , date, author };
  data.getPosts().push(newPost);
  res.redirect('/');
});

// Handle POST request to delete a post
app.post('/delete/:postId', (req, res) => {
    const postId = parseInt(req.params.postId);
    const index = data.getPosts().findIndex(post => post.id === postId);
  
    if (index !== -1) {
      // Remove the post from the array
      data.getPosts().splice(index, 1);
    }
  
    res.redirect('/');
  });


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

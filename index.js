const express = require('express');
const app = express();

// middleware;
app.use(express.json());

// routes;
app.use('/api/users', require('./routes/user'));
app.use('/api/posts', require('./routes/post'));

app.listen(5000, () => {
  console.log('Server is up and running');
});

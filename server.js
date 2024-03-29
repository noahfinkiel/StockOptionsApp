const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'client/build')));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'EXPRESS BACKEND ROUTE' });
});

// In case a request doesn't match abvove endpoint, return index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// console.log server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
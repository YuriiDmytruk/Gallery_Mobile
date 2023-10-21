const express = require('express');
const bodyParser = require('body-parser');

let images = require('./data');
const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/', (req, res) => {
  res.send(images);
});

app.post('/', (req, res) => {
  images = [req.body.image, ...images];
  res.send(images);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

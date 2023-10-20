const express = require('express');

let images = require('./data');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send(images);
});

app.post('/', (req, res) => {
  console.log({ ...req.query });
  images;
  res.send('done');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('./connection');
const { postImage, getAllImages } = require('./dataManagers/imagesDataManager');

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/', (req, res) => {
  console.log('GET');
  getAllImages()
    .then((images) => {
      res.send({ images: images.reverse() });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});

app.post('/', (req, res) => {
  console.log('POST');
  postImage({ ...req.body.image })
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

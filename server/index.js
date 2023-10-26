const express = require('express');
const bodyParser = require('body-parser');

let images = require('./data');
const app = express();
const port = 4000;

const { default: mongoose } = require('mongoose');

const uri =
  'mongodb+srv://yurii:mongoDB1@axel.wkuuigc.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log('connedcted to DB'))
  .catch((error) => console.log(error));

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/', (req, res) => {
  console.log('GET');
  res.send({ images: images });
});

app.post('/', (req, res) => {
  console.log('POST');
  images = [req.body.image, ...images];
  res.send({ images: images });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

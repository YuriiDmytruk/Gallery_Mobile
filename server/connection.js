const mongoose = require('mongoose');

const uri =
  'mongodb+srv://yurii:mongoDB1@axel.wkuuigc.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

module.exports = mongoose;

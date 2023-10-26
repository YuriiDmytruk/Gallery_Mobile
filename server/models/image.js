const { default: mongoose } = require('mongoose');
const Schema = mongoose.Schema;

const imageShema = new Schema(
  {
    url: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    popularity: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Image = mongoose.model('Image', imageShema);

module.exports = Image;

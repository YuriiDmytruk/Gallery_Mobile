const Image = require('../models/image');

const postImage = ({ url, author, popularity, description }) => {
  const image = new Image({ url, author, popularity, description });
  return new Promise((resolve, reject) => {
    image
      .save()
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getAllImages = () => {
  return Image.find({});
};

module.exports = { postImage, getAllImages };

const {postImageScore, getAverageImageScore} = require('./imageScoresDataManager');
const Image = require('../models/image');

const postImage = async ({ url, author, description }) => {
  const image = new Image({ url, author, description });
  try {
    const result = await image.save();
    postImageScore(result.id)
    return result;
  } catch (error) {
    return error
  }
};

const getImagesByAuthor = async (authorId) => {
  try {
    const images = await Image.find({ author: authorId });

    const imagesWithScores = await Promise.all(images.map(async (image) => {
      const score = await getAverageImageScore(image.id);
      return { ...image.toObject(), score: score };
    }));

    return imagesWithScores;
  } catch (error) {
    return error;
  }
};

const getPopularImages = async (amount) => {
  try {
    const images = await Image.find({});

    let imagesWithScores = await Promise.all(images.map(async (image) => {
      const score = await getAverageImageScore(image.id);
      return { ...image.toObject(), score: score };
    }));
    imagesWithScores.sort((a, b) => b.score - a.score);
    if(imagesWithScores.length > amount){
      imagesWithScores = imagesWithScores.slice(0, amount)
    }

    return imagesWithScores;
  } catch (error) {
    return error;
  }
}

const getImageByID = async (id) => {
  try {
    const image = await Image.find(id);
    return image;
  } catch (error) {
    return error
  }
}


module.exports = { postImage, getImageByID, getImagesByAuthor, getPopularImages };

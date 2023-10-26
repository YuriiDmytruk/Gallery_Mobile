const ImageScores = require('../models/imageScores');

const postImageScore = async (imageId) => {
    const imageScore = new ImageScores({ imageId, userScores:[] });
    try {
      const result = await imageScore.save();
      return result
    } catch (error) {
      console.log(error)
    }
  };

  const getAverageImageScore = async (imageId) => {
    try {
      const imageScores = await ImageScores.find({ imageId: imageId });
      const imageScore = imageScores[0];
      if(imageScore.userScores.length === 0){
        return 0;
      }
      const totalScore = imageScore.userScores.reduce((sum, scoreObject) => sum + scoreObject.score, 0);
      return totalScore / imageScore.userScores.length;
    } catch (error) {
      return error
    }
  }

  const putScore = async ({imageId, userId, score}) => {
    try {
      const imageScore = await ImageScores.findOne({ imageId: imageId });
      let scores = imageScore.userScores;
      let result;
      if(scores.some((score) => score.userId == userId)){
        const index = scores.findIndex((score) => score.userId == userId);
        scores[index] = {...scores[index], score: score};
        result = await ImageScores.updateOne({ _id: imageScore.id }, { $set: { userScores: scores } });
      }
      else{
        result = await ImageScores.updateOne({ _id: imageScore.id }, { $push: { userScores: {userId: userId, score: score} } });
      }
      return result
    } catch (error) {
      return error
    }
  }

  module.exports = { postImageScore, getAverageImageScore, putScore };

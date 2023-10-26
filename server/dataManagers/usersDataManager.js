const User = require('../models/user');

const postUser = async ({ email, password, nickName }) => {
    const user = new User({ email, password, nickName, friends:[] });
  
    try {
      const result = await user.save();
      return result;
    } catch (error) {
      return error
    }
  };

  const getUser = async ({ email, password }) => {
    try {
      const user = await User.findOne({ email: email });
      if(user.password === password){
        return user;
      }
    } catch (error) {
      return error
    }
  };

  module.exports = { postUser, getUser };

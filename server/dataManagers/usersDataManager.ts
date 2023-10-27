import User from '../models/user';
import handleError from './utill';
import {
  create200Response,
  create403Response,
  create404Response,
} from './responseCreators';
import { ResponseType } from '../types';

const postUser = async ({
  email,
  password,
  nickName,
}: {
  email: string;
  password: string;
  nickName: string;
}): Promise<ResponseType> => {
  const user = new User({ email, password, nickName, friends: [] });

  try {
    const result = await user.save();
    return create200Response(null);
  } catch (error) {
    return handleError(error);
  }
};

const getUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<ResponseType> => {
  try {
    const mongoUser = await User.findOne({ email: email });
    if (mongoUser != null) {
      const user = {
        ...mongoUser.toObject(),
        _id: mongoUser._id.toString(),
        friends: mongoUser.friends.map((friend) => friend.toString()),
        createdAt: mongoUser.createdAt.toString(),
        updatedAt: mongoUser.updatedAt.toString(),
      };
      if (user.password === password) {
        return create200Response(user);
      }
      return create403Response();
    }
    return create404Response('No such email');
  } catch (error) {
    return handleError(error);
  }
};

export { postUser, getUser };

import { ObjectId } from 'mongodb';

type ResponseType = {
  statusCode: number;
  value: ImageType | ImageType[] | UserType | UserType[] | number | null;
  errorMessage: string;
};

type ImageType = {
  _id: string;
  url: string;
  author: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  score: number | null;
};

type UserType = {
  _id: string;
  email: string;
  password: string;
  nickName: string;
  friends: string[];
  createdAt: string;
  updatedAt: string;
};

type MongoImageType = {
  _id: ObjectId;
  url: string;
  author: ObjectId;
  description: string;
  createdAt: NativeDate;
  updatedAt: NativeDate;
  __v: number;
};

export { ResponseType, ImageType, UserType, MongoImageType };
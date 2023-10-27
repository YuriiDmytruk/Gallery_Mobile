import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const imageShema = new Schema(
  {
    url: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Image = mongoose.model('Image', imageShema);

export default Image;

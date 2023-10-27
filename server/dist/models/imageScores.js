"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const imageScoresShema = new Schema({
    imageId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    userScores: {
        type: [{ userId: Schema.Types.ObjectId, score: Number }],
        required: true,
    },
}, { timestamps: true });
const ImageScores = mongoose_1.default.model('ImageScores', imageScoresShema, 'imagescores');
exports.default = ImageScores;

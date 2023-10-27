"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const userShema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    nickName: {
        type: String,
        required: true,
    },
    friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User',
        }],
}, { timestamps: true });
const User = mongoose_1.default.model('User', userShema);
exports.default = User;
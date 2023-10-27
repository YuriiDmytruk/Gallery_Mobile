"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const uri = 'mongodb+srv://yurii:mongoDB1@axel.wkuuigc.mongodb.net/?retryWrites=true&w=majority';
mongoose_1.default
    .connect(uri)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Error connecting to MongoDB:', error));
module.exports = mongoose_1.default;

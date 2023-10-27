"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPopularImages = exports.getImagesByAuthor = exports.postImage = void 0;
const image_1 = __importDefault(require("../models/image"));
const utill_1 = __importDefault(require("./utill"));
const imageScoresDataManager_1 = require("./imageScoresDataManager");
const postImage = ({ url, author, description, }) => __awaiter(void 0, void 0, void 0, function* () {
    const image = new image_1.default({ url, author, description });
    try {
        const result = yield image.save();
        (0, imageScoresDataManager_1.postImageScore)(result.id);
        return {
            statusCode: 200,
            value: null,
            errorMessage: '',
        };
    }
    catch (error) {
        return (0, utill_1.default)(error);
    }
});
exports.postImage = postImage;
const getImagesByAuthor = (authorId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const images = yield image_1.default.find({ author: authorId });
        const imagesWithScores = yield Promise.all(images.map((image) => __awaiter(void 0, void 0, void 0, function* () {
            const score = (yield (0, imageScoresDataManager_1.getAverageImageScore)(image.id)).value;
            return Object.assign(Object.assign({}, image.toObject()), { score: score, _id: image._id.toString(), author: image.author.toString(), createdAt: image.createdAt.toString(), updatedAt: image.updatedAt.toString() });
        })));
        return {
            statusCode: 200,
            value: imagesWithScores,
            errorMessage: '',
        };
    }
    catch (error) {
        return (0, utill_1.default)(error);
    }
});
exports.getImagesByAuthor = getImagesByAuthor;
const getPopularImages = (amount) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const images = yield image_1.default.find({});
        let imagesWithScores = yield Promise.all(images.map((image) => __awaiter(void 0, void 0, void 0, function* () {
            const score = (yield (0, imageScoresDataManager_1.getAverageImageScore)(image.id)).value;
            return Object.assign(Object.assign({}, image.toObject()), { score: score, _id: image._id.toString(), author: image.author.toString(), createdAt: image.createdAt.toString(), updatedAt: image.updatedAt.toString() });
        })));
        imagesWithScores.sort((a, b) => {
            if (a.score !== null && b.score !== null) {
                return b.score - a.score;
            }
            else if (a.score === null && b.score !== null) {
                return 1;
            }
            else if (a.score !== null && b.score === null) {
                return -1;
            }
            else {
                return 0;
            }
        });
        if (imagesWithScores.length > amount) {
            imagesWithScores = imagesWithScores.slice(0, amount);
        }
        return {
            statusCode: 200,
            value: imagesWithScores,
            errorMessage: '',
        };
    }
    catch (error) {
        return (0, utill_1.default)(error);
    }
});
exports.getPopularImages = getPopularImages;

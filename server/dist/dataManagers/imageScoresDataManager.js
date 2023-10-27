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
exports.putScore = exports.getAverageImageScore = exports.postImageScore = void 0;
const imageScores_1 = __importDefault(require("../models/imageScores"));
const utill_1 = __importDefault(require("./utill"));
const postImageScore = (imageId) => __awaiter(void 0, void 0, void 0, function* () {
    const imageScore = new imageScores_1.default({ imageId, userScores: [] });
    try {
        const result = yield imageScore.save();
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
exports.postImageScore = postImageScore;
const getAverageImageScore = (imageId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const imageScores = yield imageScores_1.default.find({ imageId: imageId });
        const imageScore = imageScores[0];
        if (imageScore.userScores.length === 0) {
            return {
                statusCode: 200,
                value: 0,
                errorMessage: '',
            };
        }
        const totalScore = imageScore.userScores.reduce((sum, scoreObject) => {
            var _a;
            const score = (_a = scoreObject.score) !== null && _a !== void 0 ? _a : 0;
            return sum + score;
        }, 0);
        const averageScore = totalScore / imageScore.userScores.length;
        return {
            statusCode: 200,
            value: averageScore,
            errorMessage: '',
        };
    }
    catch (error) {
        return (0, utill_1.default)(error);
    }
});
exports.getAverageImageScore = getAverageImageScore;
const putScore = ({ imageId, userId, score, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const imageScore = yield imageScores_1.default.findOne({ imageId: imageId });
        if (imageScore) {
            let scores = imageScore.userScores;
            if (scores.some((score) => score.userId && score.userId.toString() === userId)) {
                const index = scores.findIndex((score) => score.userId && score.userId.toString() === userId);
                if (index !== -1) {
                    scores[index] = Object.assign(Object.assign({}, scores[index]), { score: score });
                    yield imageScores_1.default.updateOne({ _id: imageScore.id }, { $set: { userScores: scores } });
                }
                else {
                    return {
                        statusCode: 404,
                        value: null,
                        errorMessage: 'Image not found',
                    };
                }
            }
            else {
                yield imageScores_1.default.updateOne({ _id: imageScore.id }, { $push: { userScores: { userId: userId, score: score } } });
            }
            return {
                statusCode: 200,
                value: null,
                errorMessage: '',
            };
        }
        else {
            return {
                statusCode: 404,
                value: null,
                errorMessage: 'Image not found',
            };
        }
    }
    catch (error) {
        return (0, utill_1.default)(error);
    }
});
exports.putScore = putScore;

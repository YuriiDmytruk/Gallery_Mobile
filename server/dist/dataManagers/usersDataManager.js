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
exports.getUser = exports.postUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const utill_1 = __importDefault(require("./utill"));
const responseCreators_1 = require("./responseCreators");
const postUser = ({ email, password, nickName, }) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new user_1.default({ email, password, nickName, friends: [] });
    try {
        const result = yield user.save();
        return (0, responseCreators_1.create200Response)(null);
    }
    catch (error) {
        return (0, utill_1.default)(error);
    }
});
exports.postUser = postUser;
const getUser = ({ email, password, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mongoUser = yield user_1.default.findOne({ email: email });
        if (mongoUser != null) {
            const user = Object.assign(Object.assign({}, mongoUser.toObject()), { _id: mongoUser._id.toString(), friends: mongoUser.friends.map((friend) => friend.toString()), createdAt: mongoUser.createdAt.toString(), updatedAt: mongoUser.updatedAt.toString() });
            if (user.password === password) {
                return (0, responseCreators_1.create200Response)(user);
            }
            return (0, responseCreators_1.create403Response)();
        }
        return (0, responseCreators_1.create404Response)('No such email');
    }
    catch (error) {
        return (0, utill_1.default)(error);
    }
});
exports.getUser = getUser;

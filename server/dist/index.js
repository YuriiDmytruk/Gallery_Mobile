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
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const mongoose = require('./connection');
const imagesDataManager_1 = require("./dataManagers/imagesDataManager");
const imageScoresDataManager_1 = require("./dataManagers/imageScoresDataManager");
//import { postUser, getUser } from './dataManagers/usersDataManager';
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 4000;
app.use(body_parser_1.default.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
//-----  Images  -----
app.get('/images', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('GET images');
    let result;
    if (req.body.author !== '') {
        result = yield (0, imagesDataManager_1.getImagesByAuthor)(req.body.author);
    }
    else {
        result = yield (0, imagesDataManager_1.getPopularImages)(parseInt(req.body.amount));
    }
    res.send({ images: result });
}));
app.post('/images', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('POST image');
    const result = yield (0, imagesDataManager_1.postImage)(Object.assign({}, req.body.image));
    res.send(result);
}));
//-----  Users  -----
/*
app.get('/users', async (req: Request, res: Response) => {
  console.log('GET user');
  const result = await getUser({ ...req.body.user })
  res.send(result);
});

app.post('/users', async (req: Request, res: Response) => {
  console.log('POST user');
  const result = await postUser({ ...req.body.user })
  res.send(result);
});
*/
//-----  Scores  -----
app.put('/scores', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('PUT score');
    const result = yield (0, imageScoresDataManager_1.putScore)(Object.assign({}, req.body.score));
    res.send(result);
}));
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

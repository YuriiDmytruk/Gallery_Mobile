import { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import express from 'express';

const mongoose  = require ( './connection');


import { postImage, getImagesByAuthor, getPopularImages } from './dataManagers/imagesDataManager';
import { putScore } from './dataManagers/imageScoresDataManager';
import { postUser, getUser } from './dataManagers/usersDataManager';


dotenv.config();

const app: Express = express();
const port = 4000;

app.use(bodyParser.json());
app.use((req: Request, res: Response, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

//-----  Images  -----

app.get('/images', async (req: Request, res: Response) => {
  console.log('GET images');
  let result
  if(req.body.author !== ''){
  result = await getImagesByAuthor(req.body.author);
  }
  else{
    result = await getPopularImages(parseInt(req.body.amount));
  }
  res.send({ images: result });
});

app.post('/images', async (req: Request, res: Response) => {
  console.log('POST image');
  const result = await postImage({ ...req.body.image})
  res.send(result);
});

//-----  Users  -----

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

//-----  Scores  -----

app.put('/scores', async (req: Request, res: Response) => {
  console.log('PUT score');
  const result = await putScore({ ...req.body.score })
  res.send(result);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import 'dotenv/config';
import todoRoute from './routes/todo.js';
import accountRoute from './routes/account.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', todoRoute);
app.use('/api', accountRoute)

mongoose
  .connect(process.env.MONGO_URL)
  .then(result => {
    app.listen(process.env.PORT);
  })
  .catch(err => {
    console.log(err);
    throw err;
  });

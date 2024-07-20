import express from 'express';
import bodyParser from 'body-parser';

import { mongoConnect } from './util/database.js';

import 'dotenv/config';
import todoRoute from './routes/todo.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', todoRoute);

mongoConnect(() => {
  app.listen(process.env.PORT);
});

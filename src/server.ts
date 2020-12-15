import { PORT } from 'src/common/config';
import express, { Router } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';
import { errorHandler } from './common/middlewares';
import { error } from './common/helpers';

const app = express();

app.use(cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(bodyParser.text());

app.use('/api', routes(Router()));

app.use(errorHandler);

app.use((_, res) => {
  const err = error('NOT_FOUND');

  return res.status(err.status).json(err);
});

app.listen(PORT, () => {
  process.stdout.write(`Listening on port ${PORT}\n`);
});

import { PORT } from 'src/common/config';
import express, { Router } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { getReasonPhrase } from 'http-status-codes';
import routes from './routes';
import { errorHandler } from './common/middlewares';
import { logger } from './common/helpers';

const app = express();

app.use(cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(bodyParser.text());

app.use('/api', routes(Router()));

app.use((_, res, next) => next({ name: getReasonPhrase(404) }));

app.use(errorHandler);

app.listen(PORT, () => {
  logger.info(`Listening on port ${PORT}\n`);
});

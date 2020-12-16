import { ErrorRequestHandler } from 'express';
import { error } from '../helpers';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler: ErrorRequestHandler = (_err, req, res, next) => {
  const err = error(_err.name, _err.message);

  return res.status(err.status).json(err);
};

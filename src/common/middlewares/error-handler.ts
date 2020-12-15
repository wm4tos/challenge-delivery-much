import { ErrorRequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { error } from '../helpers';

export const errorHandler: ErrorRequestHandler = (err, req, res) => {
  if (err.name in StatusCodes) {
    return res.status((StatusCodes as any)[err.name]).json(error(err.name, err.message));
  }

  const internalError = error();

  return res.status(internalError.status).json(internalError);
};

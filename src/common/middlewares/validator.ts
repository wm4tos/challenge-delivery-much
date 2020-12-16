import { getReasonPhrase } from 'http-status-codes';
import * as Joi from 'joi';
import { Validator } from '../interfaces';

export const validator: Validator = (schema, prop) => (req, res, next): void => {
  const joi = Joi.object(schema[prop]);

  const { error: validationError } = joi.validate(req[prop]);

  if (!validationError) return next();

  const { details } = validationError;

  const error = {
    name: getReasonPhrase(400),
    message: details.reduce((acc, cur) => `${acc} ${cur.message}`, '').concat(` on ${prop}.`),
  };

  return next(error);
};

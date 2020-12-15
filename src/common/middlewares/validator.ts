import * as Joi from 'joi';
import { Validator } from '../interfaces';

export const validator: Validator = (schema, prop) => (req, res, next): void => {
  const joi = Joi.object(schema[prop]);

  const { error: validationError } = joi.validate(req[prop]);

  if (!validationError) return next();

  const { details } = validationError;

  const error = {
    name: 'BAD_REQUEST',
    message: details.reduce((acc, cur) => `${acc}, ${cur.message}`, ''),
  };

  return next(error);
};

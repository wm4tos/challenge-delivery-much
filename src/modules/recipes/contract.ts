import Joi from 'joi';

export const getRecipe = {
  query: {
    i: Joi.string().required(),
  },
};

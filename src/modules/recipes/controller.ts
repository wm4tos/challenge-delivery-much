import { RequestHandler } from 'express';
import { loggerData as logger } from 'src/common/helpers';
import { getRecipes } from './service';

export const getRecipesRoute: RequestHandler = async (req, res, next) => {
  const log = { filename: __filename, type: req.method, endpoint: req.url };

  try {
    const { i } = req.query;

    const keywords = (i as string).split(',');

    const recipes = await getRecipes(keywords);

    const response = {
      keywords,
      recipes,
    };

    logger('info', { ...log, statusCode: 200, response });

    return res.status(200).json(response);
  } catch (error) {
    error.log = log;

    return next(error);
  }
};

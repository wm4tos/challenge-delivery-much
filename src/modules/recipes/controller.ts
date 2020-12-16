import { RequestHandler } from 'express';
import { getRecipes } from './service';

export const getRecipesRoute: RequestHandler = async (req, res, next) => {
  try {
    const { i } = req.query;

    const keywords = (i as string).split(',');

    const recipes = await getRecipes(keywords);

    return res.status(200).json({
      keywords,
      recipes,
    });
  } catch (error) {
    return next(error);
  }
};

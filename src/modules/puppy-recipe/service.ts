import axios from 'axios';
import { getReasonPhrase } from 'http-status-codes';
import { RECIPE_PUPPY_API_URL } from 'src/common/config';
import { PuppyRecipeErrors } from './errors';
import { PuppyRecipeDto } from './interfaces/puppy-recipe.dto';

export const getPuppyRecipes = async (ingredients: string[]): Promise<PuppyRecipeDto[]> => {
  try {
    const { data: { results } } = await axios.get(`${RECIPE_PUPPY_API_URL}/`, { params: { i: ingredients.join(',') } });

    return results;
  } catch (err) {
    const { response: { status } } = err;

    err.name = getReasonPhrase(status || 500);
    err.message = PuppyRecipeErrors.NOT_ONLINE;

    throw err;
  }
};

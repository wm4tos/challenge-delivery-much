import { composeWith } from 'ramda';
import { then } from 'ramda-adjunct';
import { getGiphy } from '../giphy/service';
import { MappedPuppyRecipeDto } from '../puppy-recipe/interfaces/mapped-puppy-recipe.dto';
import { getPuppyRecipes } from '../puppy-recipe/service';
import { RecipeDto } from './interfaces/recipe.dto';
import { mapGiphyUrl, mapRecipes } from './mapper';
import { get, save } from './repository';

export const getAndMapRecipes = composeWith<string[], MappedPuppyRecipeDto[] | Promise<MappedPuppyRecipeDto[]>>(
  then, [
    mapRecipes,
    getPuppyRecipes,
  ],
);

export const getAndMapGiphy = composeWith<string, Promise<string> | string>(then, [mapGiphyUrl, getGiphy]);

export const getRecipes = async (ingredients: string[]): Promise<RecipeDto[]> => {
  const key = ingredients.join(',');
  const recipesFromRedis = await get(key);

  if (recipesFromRedis) return recipesFromRedis;

  const puppyRecipes = await getAndMapRecipes(ingredients);

  const recipes = await Promise.all(puppyRecipes.map(async (recipe) => ({
    ...recipe,
    gif: await getAndMapGiphy(recipe.title),
  })));

  save(key, recipes);

  return recipes;
};

import {
  compose, map, prop, sortBy,
} from 'ramda';
import { GiphyDto } from '../giphy/interfaces/giphy.dto';
import { getBetterGiphy, getGiphyUrl } from '../giphy/mapper';
import { MappedPuppyRecipeDto } from '../puppy-recipe/interfaces/mapped-puppy-recipe.dto';
import { PuppyRecipeDto } from '../puppy-recipe/interfaces/puppy-recipe.dto';
import { changeKeys, removeThumbnail, sortIngredients } from '../puppy-recipe/mapper';

export const mapRecipes = compose<
PuppyRecipeDto[], PuppyRecipeDto[], PuppyRecipeDto[], MappedPuppyRecipeDto[], MappedPuppyRecipeDto[] | Promise<MappedPuppyRecipeDto[]>
>(
  sortBy(prop('title')),
  map(changeKeys),
  map(removeThumbnail),
  map(sortIngredients),
);

export const mapGiphyUrl = compose<GiphyDto[], GiphyDto, string>(getGiphyUrl, getBetterGiphy);

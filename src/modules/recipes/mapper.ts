import {
  compose, map, prop, sortBy,
} from 'ramda';
import { GiphyDto } from '../giphy/interfaces/giphy.dto';
import { getBetterGiphy, getGiphyUrl } from '../giphy/mapper';
import { MappedPuppyRecipeDto } from '../puppy-recipe/interfaces/mapped-puppy-recipe.dto';
import { PuppyRecipeDto } from '../puppy-recipe/interfaces/puppy-recipe.dto';
import { changeKeys, removeThumbnail } from '../puppy-recipe/mapper';

export const mapRecipes = compose<
PuppyRecipeDto[], PuppyRecipeDto[], MappedPuppyRecipeDto[], MappedPuppyRecipeDto[] | Promise<MappedPuppyRecipeDto[]>
>(
  sortBy(prop('title')),
  map(changeKeys),
  map(removeThumbnail),
);

export const mapGiphyUrl = compose<GiphyDto[], GiphyDto, string>(getGiphyUrl, getBetterGiphy);

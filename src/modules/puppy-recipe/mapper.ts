import { omit, trim } from 'ramda';
import { renameKeys } from 'ramda-adjunct';
import { MappedPuppyRecipeDto } from './interfaces/mapped-puppy-recipe.dto';
import { PuppyRecipeDto } from './interfaces/puppy-recipe.dto';

interface RemoveThumbnail {
  (recipe: PuppyRecipeDto): PuppyRecipeDto;
}

export const removeThumbnail: RemoveThumbnail = omit(['thumbnail']);

interface ChangeKeys {
  (recipe: PuppyRecipeDto): MappedPuppyRecipeDto
}

export const changeKeys: ChangeKeys = (recipe) => {
  const keyMap = { href: 'link' };

  return renameKeys(keyMap)(recipe) as MappedPuppyRecipeDto;
};

interface SortIngredients {
  (recipe: PuppyRecipeDto): PuppyRecipeDto
}

export const sortIngredients: SortIngredients = ({ ingredients, ...recipe }) => {
  const i = (ingredients as string).split(',').map(trim).sort();

  return { ...recipe, ingredients: i } as PuppyRecipeDto;
};

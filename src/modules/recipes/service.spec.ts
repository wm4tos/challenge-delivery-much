import { GiphyDto } from '../giphy/interfaces/giphy.dto';
import * as giphyService from '../giphy/service';
import { MappedPuppyRecipeDto } from '../puppy-recipe/interfaces/mapped-puppy-recipe.dto';
import { PuppyRecipeDto } from '../puppy-recipe/interfaces/puppy-recipe.dto';
import * as puppyRecipeService from '../puppy-recipe/service';
import { RecipeDto } from './interfaces/recipe.dto';
import { mapRecipes } from './mapper';
import { getRecipes } from './service';

jest.mock('../giphy/service');
jest.mock('../puppy-recipe/service');

const mockedGiphyService = giphyService as jest.Mocked<typeof giphyService>;
const mockedPuppyRecipeService = puppyRecipeService as jest.Mocked<typeof puppyRecipeService>;

describe('Recipes service', () => {
  const mockedGifs = [
    { url: 'https://giphy.com/gifs/rice-fried-leftover-Aj9EHGocwb4bu' },
  ] as GiphyDto[];

  const mockedPuppyRecipes = [
    {
      title: 'Dehydrating Tomatoes',
      href: 'http://www.recipezaar.com/Dehydrating-Tomatoes-325795',
      ingredients: 'tomato',
    },
    {
      title: 'Fresh Tomatoes With Caper Dressing',
      href: 'http://www.recipezaar.com/Fresh-Tomatoes-With-Caper-Dressing-244024',
      ingredients: 'tomato',
    },
    {
      title: 'Canned Tomatoes Recipe',
      href: 'http://www.grouprecipes.com/46770/canned-tomatoes.html',
      ingredients: 'tomato',
    },
    {
      title: 'Zesty Bean Dip',
      href: 'http://allrecipes.com/Recipe/Zesty-Bean-Dip/Detail.aspx',
      ingredients: 'cheddar cheese, tomato',
    },
    {
      title: 'Goat Cheese Stuffed Tomatoes',
      href: 'http://www.recipezaar.com/Goat-Cheese-Stuffed-Tomatoes-64641',
      ingredients: 'goat cheese, tomato',
    },
    {
      title: 'Gnocchi with Zucchini Ribbons & Parsley Brown Butter',
      href: 'http://www.eatingwell.com/recipes/gnocchi_zucchini_butter.html',
      ingredients: 'tomato',
    },
    {
      title: 'Sauteed Green Beans & Cherry Tomatoes',
      href: 'http://www.eatingwell.com/recipes/green_bean_tomato.html',
      ingredients: 'tomato',
    },
    {
      title: 'Italian Chicken Bow Tie Pasta',
      href: 'http://allrecipes.com/Recipe/Italian-Chicken-Bow-Tie-Pasta/Detail.aspx',
      ingredients: 'chicken, tomato',
    },
    {
      title: 'Slow-roasted Tomatoes Recipe',
      href: 'http://www.grouprecipes.com/15870/slow-roasted-tomatoes.html',
      ingredients: 'tomato',
    },
    {
      title: 'Spicy Mexican Salad',
      href: 'http://allrecipes.com/Recipe/Spicy-Mexican-Salad/Detail.aspx',
      ingredients: 'cheddar cheese, tomato',
    },
  ] as PuppyRecipeDto[];

  it('should return recipes correctly', () => {
    mockedPuppyRecipeService.getPuppyRecipes.mockResolvedValue(mockedPuppyRecipes);
    mockedGiphyService.getGiphy.mockResolvedValue(mockedGifs);

    expect(getRecipes(['tomato'])).resolves.toStrictEqual((mapRecipes(mockedPuppyRecipes) as MappedPuppyRecipeDto[]).map(
      (item) => ({ ...item, gif: mockedGifs[0].url }) as RecipeDto,
    ));
  });
});

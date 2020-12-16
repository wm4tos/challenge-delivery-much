import axios from 'axios';
import { getReasonPhrase } from 'http-status-codes';
import { PuppyRecipeErrors } from './errors.enum';
import { PuppyRecipeDto } from './interfaces/puppy-recipe.dto';
import { getPuppyRecipes } from './service';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('PuppyRecipe service', () => {
  it('should get recipe correctly', () => {
    const expected = [{} as PuppyRecipeDto];

    mockedAxios.get.mockResolvedValue({ data: { results: expected } });

    expect(getPuppyRecipes([])).resolves.toStrictEqual(expected);
  });

  it('should receive bad request error', () => {
    const status = 400;
    const expected = {
      name: getReasonPhrase(status),
      message: PuppyRecipeErrors.NOT_ONLINE,
    };

    mockedAxios.get.mockRejectedValue({ response: { status } });

    expect(getPuppyRecipes([])).rejects.toMatchObject(expected);
  });

  it('should receive internal server error', () => {
    const status = 500;
    const expected = {
      name: getReasonPhrase(status),
      message: PuppyRecipeErrors.NOT_ONLINE,
    };

    mockedAxios.get.mockRejectedValue({ response: { status } });

    expect(getPuppyRecipes([])).rejects.toMatchObject(expected);
  });
});

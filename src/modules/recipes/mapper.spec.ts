import { GiphyDto } from '../giphy/interfaces/giphy.dto';
import { PuppyRecipeDto } from '../puppy-recipe/interfaces/puppy-recipe.dto';
import { mapGiphyUrl, mapRecipes } from './mapper';

describe('Recipes mapper', () => {
  it('should return list sorted', () => {
    const list = [{ title: 'd' }, { title: 'b' }, { title: 'e' }, { title: 'c' }, { title: 'a' }] as PuppyRecipeDto[];

    const sorted = [].concat(list).sort((a, b) => a.title.localeCompare(b.title));

    expect(mapRecipes(list)).toStrictEqual(sorted);
  });

  it('should return url of first item', () => {
    const list = [{ url: 'http://example.com' }, { url: 'http://example1.com' }] as GiphyDto[];

    const [expected] = list;

    expect(mapGiphyUrl(list)).toBe(expected.url);
  });
});

import { omit } from 'ramda';
import { MappedPuppyRecipeDto } from './interfaces/mapped-puppy-recipe.dto';
import { PuppyRecipeDto } from './interfaces/puppy-recipe.dto';
import { changeKeys, removeThumbnail } from './mapper';

describe('PuppyRecipe mapper', () => {
  it('should remove thumbnail prop from object', () => {
    const obj = { thumbnail: 'bla' } as PuppyRecipeDto;

    const expected = omit(['thumbnail'], obj);

    expect(removeThumbnail(obj)).toStrictEqual(expected);
  });

  it('should rename object key', () => {
    const obj = { href: 'bla' } as PuppyRecipeDto;

    const expected = { link: obj.href } as MappedPuppyRecipeDto;

    expect(changeKeys(obj)).toStrictEqual(expected);
  });

  it('should return the same object', () => {
    const expected = { link: 'bla' } as any;

    expect(changeKeys(expected)).toStrictEqual(expected);
  });
});

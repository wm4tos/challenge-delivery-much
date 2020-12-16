import { PuppyRecipeBaseDto } from './puppy-recipe-base.dto';

export interface MappedPuppyRecipeDto extends PuppyRecipeBaseDto {
  thumbnail?: string;
  link: string;
}

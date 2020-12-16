import { PuppyRecipeBaseDto } from './puppy-recipe-base.dto';

export interface PuppyRecipeDto extends PuppyRecipeBaseDto {
  thumbnail?: string;
  href: string;
}

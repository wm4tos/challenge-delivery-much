import { MappedPuppyRecipeDto } from 'src/modules/puppy-recipe/interfaces/mapped-puppy-recipe.dto';

export interface RecipeDto extends MappedPuppyRecipeDto {
  gif: string;
}

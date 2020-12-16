import { Prop, RouterModule } from 'src/common/interfaces';
import { validator } from 'src/common/middlewares';
import { getRecipe } from './contract';
import { getRecipesRoute } from './controller';

const RecipeRouter: RouterModule = (router) => {
  router.get('/', validator(getRecipe, Prop.QUERY), getRecipesRoute);

  return { endpoint: '/recipes', router };
};

export default RecipeRouter;

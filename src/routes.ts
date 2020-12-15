import { Router } from 'express-serve-static-core';
import { readdirSync } from 'fs';
import { join } from 'path';
import { loadRoutes } from './common/helpers';
import { RouterModule } from './common/interfaces';

export default (router: Router): Router => {
  const modulesPath = join(__dirname, 'modules');
  const modules = readdirSync(modulesPath);

  if (!modules.length) return router;

  const routes: RouterModule[] = loadRoutes(modules, modulesPath);

  routes.forEach((route) => {
    const { endpoint, router: r } = route(router);

    router.use(endpoint, r);
  });

  return router;
};

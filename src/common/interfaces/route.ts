import { Router } from 'express-serve-static-core';

export interface Route {
  router: Router, endpoint: string,
}

export interface RouterModule {
  (router: Router): Route
}

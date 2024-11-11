import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'personal-info',
    loadChildren: async () =>
      (await import('@job-application-wizard/personal-info/routes')).routes,
  },
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'save',
        loadComponent: async () =>
          (await import('@job-application-wizard/personal-info/feature-create'))
            .FeatureCreateComponent,
      },
    ],
  },
];

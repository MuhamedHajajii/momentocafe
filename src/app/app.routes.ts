import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        '../app/core/components/pages/blank-layout/blank-layout.component'
      ).then((e) => e.BlankLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            '../app/core/components/pages/blank-layout/home/home.component'
          ).then((e) => e.HomeComponent),
      },
    ],
  },
];

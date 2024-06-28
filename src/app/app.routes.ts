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
      {
        path: 'boxes',
        loadComponent: () =>
          import(
            '../app/core/components/pages/blank-layout/boxes/boxes.component'
          ).then((e) => e.BoxesComponent),
      },
      {
        path: 'cocktail',
        loadComponent: () =>
          import(
            '../app/core/components/pages/blank-layout/cocktail/cocktail.component'
          ).then((e) => e.CocktailComponent),
      },
      {
        path: 'freshjuice',
        loadComponent: () =>
          import(
            '../app/core/components/pages/blank-layout/freshjuice/freshjuice.component'
          ).then((e) => e.FreshjuiceComponent),
      },
      {
        path: 'hotdrinks',
        loadComponent: () =>
          import(
            '../app/core/components/pages/blank-layout/hotdrinks/hotdrinks.component'
          ).then((e) => e.HotdrinksComponent),
      },
      {
        path: 'milkshakes',
        loadComponent: () =>
          import(
            '../app/core/components/pages/blank-layout/milkshakes/milkshakes.component'
          ).then((e) => e.MilkshakesComponent),
      },
      {
        path: 'tea',
        loadComponent: () =>
          import(
            '../app/core/components/pages/blank-layout/tea/tea.component'
          ).then((e) => e.TeaComponent),
      },
    ],
  },
];

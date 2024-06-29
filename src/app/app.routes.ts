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
        path: 'menu',
        loadComponent: () =>
          import(
            './core/components/pages/blank-layout/menu/menu.component'
          ).then((e) => e.MenuComponent),
      },
      {
        path: 'boxes',
        loadComponent: () =>
          import(
            './core/components/pages/blank-layout/menu/boxes/boxes.component'
          ).then((e) => e.BoxesComponent),
      },
      {
        path: 'cocktail',
        loadComponent: () =>
          import(
            './core/components/pages/blank-layout/menu/cocktail/cocktail.component'
          ).then((e) => e.CocktailComponent),
      },
      {
        path: 'freshjuice',
        loadComponent: () =>
          import(
            './core/components/pages/blank-layout/menu/freshjuice/freshjuice.component'
          ).then((e) => e.FreshjuiceComponent),
      },
      {
        path: 'hotdrinks',
        loadComponent: () =>
          import(
            './core/components/pages/blank-layout/menu/hotdrinks/hotdrinks.component'
          ).then((e) => e.HotdrinksComponent),
      },
      {
        path: 'milkshakes',
        loadComponent: () =>
          import(
            './core/components/pages/blank-layout/menu/milkshakes/milkshakes.component'
          ).then((e) => e.MilkshakesComponent),
      },
      {
        path: 'tea',
        loadComponent: () =>
          import(
            './core/components/pages/blank-layout/menu/tea/tea.component'
          ).then((e) => e.TeaComponent),
      },
      {
        path: 'feedback',
        loadComponent: () =>
          import(
            './core/components/pages/blank-layout/feedback/feedback.component'
          ).then((e) => e.FeedbackComponent),
      },
    ],
  },
];

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
        path: 'feedback',
        loadComponent: () =>
          import(
            './core/components/pages/blank-layout/feedback/feedback.component'
          ).then((e) => e.FeedbackComponent),
      },
      {
        path: 'delivery',
        loadComponent: () =>
          import(
            './core/components/pages/blank-layout/delivery/delivery-form/delivery-form.component'
          ).then((e) => e.DeliveryFormComponent),
      },
      {
        path: 'deliveryAdmin',
        loadComponent: () =>
          import(
            './core/components/pages/blank-layout/delivery/delivery-adminstration/delivery-adminstration.component'
          ).then((e) => e.DeliveryAdminstrationComponent),
      },
      {
        path: 'menu-categories/:id',
        loadComponent: () =>
          import(
            './core/components/pages/blank-layout/menu/menu-categories/menu-categories.component'
          ).then((e) => e.MenuCategoriesComponent),
      },
      {
        path: 'cart',
        loadComponent: () =>
          import(
            './core/components/pages/blank-layout/delivery/cart/cart.component'
          ).then((e) => e.CartComponent),
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
];

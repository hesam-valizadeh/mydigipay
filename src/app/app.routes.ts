import { Routes } from '@angular/router';
import {environment} from '../enviroment/environment';
import {RouterLinksPath, routeWithoutSlash} from './@core/constans/router-links';

export const routes: Routes = [
  {
    path: "",
    data: {
      title: 'صفحه اصلی | دیجی‌پی',
      description: "",
      canonical: environment.baseURL
    },
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
  },
  {
    path: routeWithoutSlash(RouterLinksPath.wealthPage.wealth),
    data: {
      title: 'سرمایه‌گذاری دیجی‌پی',
      description: "",
    },
    loadComponent: () => import('./pages/wealth/wealth.component').then(c => c.WealthComponent)
  },
];

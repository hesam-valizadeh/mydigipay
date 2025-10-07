import { Routes } from '@angular/router';
import {environment} from '../enviroment/environment';
import {RouterLinksPath, routeWithoutSlash} from './@core/constans/router-links';

export const routes: Routes = [
  {
    path: "",
    data: {
      title: 'گیمی‌فای اولین پلتفرم تخصصی طراحی و مدیریت کمپین در ایران',
      description: "گیمی‌فای اولین پلتفرم تخصصی طراحی و مدیریت کمپین در ایران است. با ابزارهای این پلتفرم با اطمینان بالا تعامل با کاربران خود را افزایش دهید.",
      canonical: environment.baseURL
    },
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
  },
  {
    path: routeWithoutSlash(RouterLinksPath.gamesPage.singleRoulette),
    data: {
      title: 'معرفی گیمیفیکیشن حرفه ای گردونه شانس تک لایه',
      description: "گردونه شانس تک لایه گیمی‌فای ابزاری حرفه ای و جذاب برای افزایش تعامل مخاطب، جمع آوری سرنخ (لید) و ترغیب کاربران به مشارکت در کمپین‌های شما است.",
    },
    loadComponent: () => import('./pages/single-roulette/single-roulette.component').then(c => c.SingleRouletteComponent)
  },
];

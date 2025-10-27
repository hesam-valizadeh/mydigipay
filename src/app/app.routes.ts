import { Routes } from '@angular/router';
import {environment} from '../enviroment/environment';
import {RouterLinksPath, routeWithoutSlash} from './@core/constants/router-links';

export const routes: Routes = [
  {
    path: "",
    data: {
      title: 'صفحه اصلی | دیجی‌پی',
      description: "با دیجی پی، به هیچ اپلیکیشن مالی نیاز نداری از خرید اقساطی و دریافت اعتبار تا خرید بیمه، سرمایه گذاری و پرداخت های روزمره را سریع و آسان با دیجی پی انجام دهید.",
      canonical: environment.baseURL
    },
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
  },
  {
    path: routeWithoutSlash(RouterLinksPath.wealthPage.wealth),
    data: {
      title: 'سرمایه‌گذاری دیجی‌پی',
      description: "با هر مبلغی که داری سرمایه گذاری کن و ارزش پولت رو در برابر تورم نه تنها حفظ کن بلکه افزایش بده. صندوق سرمایه‌گذاری دیجی‌پی یک فرصت مناسب برای افرادی است که به دنبال رشد سرمایه خود با مدیریت حرفه‌ای هستند.",
    },
    loadComponent: () => import('./pages/wealth/wealth.component').then(c => c.WealthComponent)
  },
];

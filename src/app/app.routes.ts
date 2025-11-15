import { Routes } from '@angular/router';
import { environment } from '../enviroment/environment';
import {
  RouterLinksPath,
  routeWithoutSlash,
} from './@core/constants/router-links';
import { HubComponent } from './pages/hub/hub.component';
import { AuthGuard } from './@core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'صفحه اصلی | دیجی‌پی',
      description:
        'با دیجی پی، به هیچ اپلیکیشن مالی نیاز نداری از خرید اقساطی و دریافت اعتبار تا خرید بیمه، سرمایه گذاری و پرداخت های روزمره را سریع و آسان با دیجی پی انجام دهید.',
      canonical: environment.baseURL,
    },
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
   
  },
  {
    path: routeWithoutSlash(RouterLinksPath.wealthPage.wealth),
    data: {
      title: 'سرمایه‌گذاری دیجی‌پی',
      description:
        'با هر مبلغی که داری سرمایه گذاری کن و ارزش پولت رو در برابر تورم نه تنها حفظ کن بلکه افزایش بده. صندوق سرمایه‌گذاری دیجی‌پی یک فرصت مناسب برای افرادی است که به دنبال رشد سرمایه خود با مدیریت حرفه‌ای هستند.',
    },
    loadComponent: () =>
      import('./pages/wealth/wealth.component').then((c) => c.WealthComponent),
  },
  {
    path: routeWithoutSlash(RouterLinksPath.contactUsPage.contactUs),
    data: {
      title: 'تماس با ما',
      description:''
    },
    loadComponent: () =>
      import('./pages/contact-us/contact-us.component').then((c) => c.ContactUsComponent),
  },
  {
    path: routeWithoutSlash(RouterLinksPath.faqPage.faq),
    data: {
      title: 'سوالات متداول',
      description:''
    },
    loadComponent: () =>
      import('./pages/faq/faq.component').then((c) => c.FaqComponent),
  },
  {
    path: routeWithoutSlash(RouterLinksPath.rulesPage.rules),
    data: {
      title: 'قوانین و مقررات',
      description:'شرایط جامع استفاده از خدمات دیجی‌پی',
    },
    loadComponent: () => import('./pages/rules/rules.component').then((c) => c.RulesComponent),
  },
  {
    path: routeWithoutSlash(RouterLinksPath.loginPage.login),
    data: {
      showLayout: false,
      title: 'دیجی پی | خدمات مالی و پرداخت',
      description: '',
    },
    loadComponent: () =>
      import('./pages/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: routeWithoutSlash(RouterLinksPath.hubPage.hub),
    canActivate: [AuthGuard],
    data: {
      showLayout: false,
      title: '',
      description: '',
    },
    loadComponent: () =>
      import('./pages/hub/hub.component').then((c) => c.HubComponent),
  },
  {
    path: '**',
    data: {
      showLayout: false,
      title: '',
      description: '',
    },
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then((c) => c.NotFoundComponent),
  },

];

import { Routes } from '@angular/router';
import { environment } from '../enviroment/environment';
import {
  RouterLinksPath,
  routeWithoutSlash,
} from './@core/constants/router-links';
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
    path: routeWithoutSlash(RouterLinksPath.servicesPage.services),
    data: {
      title: 'خدمات | دیجی‌پی',
      description: 'خدمات دیجی‌پی',
    },
    loadComponent: () =>
      import('./pages/services/services.component').then((c) => c.ServicesComponent),
  },
  {
    path: routeWithoutSlash(RouterLinksPath.shopsPage.shops),
    data: {
      title: 'فروشگاه‌ها | دیجی‌پی',
      description: 'فروشگاه‌های دیجی‌پی',
    },
    loadComponent: () =>
      import('./pages/shops/shops.component').then((c) => c.ShopsComponent),
  },
  {
    path: routeWithoutSlash(RouterLinksPath.paymentPage.payment),
    data: {
      title: 'پرداخت | دیجی‌پی',
      description: 'پرداخت با دیجی‌پی',
    },
    loadComponent: () =>
      import('./pages/payment/payment.component').then((c) => c.PaymentComponent),
  },
  {
    path: routeWithoutSlash(RouterLinksPath.loanPage.loanProduct),
    data: {
      title: 'وام خرید کالا | دیجی‌پی',
      description: 'وام خرید کالا از دیجی‌پی',
    },
    loadComponent: () =>
      import('./pages/loan-product/loan-product.component').then((c) => c.LoanProductComponent),
  },
  {
    path: routeWithoutSlash(RouterLinksPath.loanPage.bnpl),
    data: {
      title: 'الان بخر بعدا پرداخت کن | دیجی‌پی',
      description: 'خرید اعتباری با دیجی‌پی',
    },
    loadComponent: () =>
      import('./pages/bnpl/bnpl.component').then((c) => c.BnplComponent),
  },
  {
    path: routeWithoutSlash(RouterLinksPath.loanPage.digikalaInstallment),
    data: {
      title: 'خرید اقساطی از دیجی‌کالا | دیجی‌پی',
      description: 'خرید اقساطی از دیجی‌کالا با دیجی‌پی',
    },
    loadComponent: () =>
      import('./pages/digikala-installment/digikala-installment.component').then((c) => c.DigikalaInstallmentComponent),
  },
  {
    path: routeWithoutSlash(RouterLinksPath.insurancePage.thirdParty),
    data: {
      title: 'بیمه شخص ثالث | دیجی‌پی',
      description: 'خرید بیمه شخص ثالث با دیجی‌پی',
    },
    loadComponent: () =>
      import('./pages/third-party-insurance/third-party-insurance.component').then((c) => c.ThirdPartyInsuranceComponent),
  },
  {
    path: routeWithoutSlash(RouterLinksPath.insurancePage.electronicEquipment),
    data: {
      title: 'بیمه تجهیزات الکترونیک | دیجی‌پی',
      description: 'خرید بیمه تجهیزات الکترونیک با دیجی‌پی',
    },
    loadComponent: () =>
      import('./pages/electronic-equipment-insurance/electronic-equipment-insurance.component').then((c) => c.ElectronicEquipmentInsuranceComponent),
  },
  {
    path: routeWithoutSlash(RouterLinksPath.businessServicesPage.creditPaymentGateway),
    data: {
      title: 'درگاه پرداخت اعتباری | دیجی‌پی',
      description: 'درگاه پرداخت اعتباری دیجی‌پی',
    },
    loadComponent: () =>
      import('./pages/credit-payment-gateway/credit-payment-gateway.component').then((c) => c.CreditPaymentGatewayComponent),
  },
  {
    path: routeWithoutSlash(RouterLinksPath.businessServicesPage.merchantLoan),
    data: {
      title: 'وام فروشندگان | دیجی‌پی',
      description: 'وام فروشندگان دیجی‌پی',
    },
    loadComponent: () =>
      import('./pages/merchant-loan/merchant-loan.component').then((c) => c.MerchantLoanComponent),
  },
  {
    path: routeWithoutSlash(RouterLinksPath.businessServicesPage.comprehensivePaymentGateway),
    data: {
      title: 'درگاه پرداخت جامع | دیجی‌پی',
      description: 'درگاه پرداخت جامع دیجی‌پی',
    },
    loadComponent: () =>
      import('./pages/comprehensive-payment-gateway/comprehensive-payment-gateway.component').then((c) => c.ComprehensivePaymentGatewayComponent),
  },
  {
    path: routeWithoutSlash(RouterLinksPath.businessServicesPage.earlySettlement),
    data: {
      title: 'تسویه زودهنگام | دیجی‌پی',
      description: 'تسویه زودهنگام دیجی‌پی',
    },
    loadComponent: () =>
      import('./pages/early-settlement/early-settlement.component').then((c) => c.EarlySettlementComponent),
  },
  {
    path: routeWithoutSlash(RouterLinksPath.organizationalServicesPage.organizationalInstallment),
    data: {
      title: 'خرید اقساطی سازمانی | دیجی‌پی',
      description: 'خرید اقساطی سازمانی دیجی‌پی',
    },
    loadComponent: () =>
      import('./pages/organizational-installment/organizational-installment.component').then((c) => c.OrganizationalInstallmentComponent),
  },
  {
    path: routeWithoutSlash(RouterLinksPath.organizationalServicesPage.organizationalBnpl),
    data: {
      title: 'الان بخر بعدا پرداخت کن - سازمانی | دیجی‌پی',
      description: 'خرید اعتباری سازمانی دیجی‌پی',
    },
    loadComponent: () =>
      import('./pages/organizational-bnpl/organizational-bnpl.component').then((c) => c.OrganizationalBnplComponent),
  },
  {
    path: routeWithoutSlash(RouterLinksPath.aboutPage.about),
    data: {
      title: 'درباره ما - دیجی‌پی دریافت وام خرید کالا و خدمات',
      description: 'با دیجی‌پی، پرداخت‌ها، خریدهای اعتباری ۱ قسطه و ۴ قسطه، دریافت وام خرید کالا و خدمات، خرید اقساطی بیمه، سرمایه‌گذاری و همچنین خدمات روزمره مالی را فقط با چند کلیک انجام دهید.',
    },
    loadComponent: () =>
      import('./pages/about/about.component').then((c) => c.AboutComponent),
  },
  {
    path: routeWithoutSlash(RouterLinksPath.aboutPage.annualReport),
    data: {
      title: 'گزارش سالانه | دیجی‌پی',
      description: 'گزارش سالانه دیجی‌پی',
    },
    loadComponent: () =>
      import('./pages/annual-report/annual-report.component').then((c) => c.AnnualReportComponent),
  },
  {
    path: routeWithoutSlash(RouterLinksPath.aboutPage.careers),
    data: {
      title: 'فرصت‌های شغلی | دیجی‌پی',
      description: 'فرصت‌های شغلی دیجی‌پی',
    },
    loadComponent: () =>
      import('./pages/careers/careers.component').then((c) => c.CareersComponent),
  },
  {
    path: routeWithoutSlash(RouterLinksPath.aboutPage.blog),
    data: {
      title: 'مجله اینترنتی دیجی‌پی',
      description: 'مجله اینترنتی دیجی‌پی',
    },
    loadComponent: () =>
      import('./pages/blog/blog.component').then((c) => c.BlogComponent),
  },
  {
    path: routeWithoutSlash(RouterLinksPath.aboutPage.technicalDocs),
    data: {
      title: 'مستندات فنی | دیجی‌پی',
      description: 'مستندات فنی دیجی‌پی',
    },
    loadComponent: () =>
      import('./pages/technical-docs/technical-docs.component').then((c) => c.TechnicalDocsComponent),
  },
  {
    path: routeWithoutSlash(RouterLinksPath.specialServicesPage.specialFinancialServices),
    data: {
      title: 'خدمات ویژه مالی | دیجی‌پی',
      description: 'خدمات ویژه مالی دیجی‌پی',
    },
    loadComponent: () =>
      import('./pages/special-financial-services/special-financial-services.component').then((c) => c.SpecialFinancialServicesComponent),
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

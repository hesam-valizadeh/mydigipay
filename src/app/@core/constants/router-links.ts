export const routerLinksPath = {
  gamesPage: {
    singleRoulette: '/single-roulette',
    doubleRoulette: '/double-roulette',
    tripleRoulette: '/triple-roulette',
    paperScissorsRock: '/paper-scissors-rock',
    jackpot: '/jackpot',
    quiz: '/quiz',
  },
  campaignPage: {
    alibaba: '/alibaba-campaign',
    khanomi: '/khanomi-campaign',
    nostrajamos: '/nostrajamos-campaign',
    divar: '/divar-campaign',
  },
  loginPage: {
    login: '/login',
    AuthAppletRules: 'Auth-applet-rules',
  },
  rulesPage: {
    rules: '/rules',
  },
  contactUsPage: {
    contactUs: '/contactus',
  },
  faqPage: {
    faq: '/faq',
  },
  wealthPage: {
    wealth: '/wealth',
  },
  hubPage: {
    hub: '/hub',
  },
  servicesPage: {
    services: '/services',
  },
  shopsPage: {
    shops: '/shops',
  },
  paymentPage: {
    payment: '/payment',
  },
  loanPage: {
    loanProduct: '/loan-product',
    bnpl: '/bnpl',
    digikalaInstallment: '/digikala-installment',
  },
  insurancePage: {
    thirdParty: '/third-party-insurance',
    electronicEquipment: '/electronic-equipment-insurance',
  },
  businessServicesPage: {
    creditPaymentGateway: '/credit-payment-gateway',
    merchantLoan: '/merchant-loan',
    comprehensivePaymentGateway: '/comprehensive-payment-gateway',
    earlySettlement: '/early-settlement',
  },
  organizationalServicesPage: {
    organizationalInstallment: '/organizational-installment',
    organizationalBnpl: '/organizational-bnpl',
  },
  aboutPage: {
    about: '/about',
    annualReport: '/annual-report',
    careers: '/careers',
    blog: '/blog',
    technicalDocs: '/technical-docs',
  },
  specialServicesPage: {
    specialFinancialServices: '/special-financial-services',
  },
} as const;
export function routeWithoutSlash(path: string): string {
  if (path.startsWith('/')) {
    return path.replace('/', '');
  } else {
    return path;
  }
}

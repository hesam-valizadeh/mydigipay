export class RouterLinksPath {
  static gamesPage = {
    singleRoulette: '/single-roulette',
    doubleRoulette: '/double-roulette',
    tripleRoulette: '/triple-roulette',
    paperScissorsRock: '/paper-scissors-rock',
    jackpot: '/jackpot',
    quiz: '/quiz',
  };
  static campaignPage = {
    alibaba: '/alibaba-campaign',
    khanomi: '/khanomi-campaign',
    nostrajamos: '/nostrajamos-campaign',
    divar: '/divar-campaign',
  };
  static loginPage = {
    login: '/login',
    AuthAppletRules:'Auth-applet-rules'
  };
  static rulesPage = {
    rules: '/rules',
  };
  static contactUsPage = {
    contactUs: '/contactus',
  };
  static faqPage = {
    faq: '/faq',
  };
  static wealthPage = {
    wealth: '/wealth',
  };
  static hubPage = {
    hub: '/hub',
  };
  static servicesPage = {
    services: '/services',
  };
  static shopsPage = {
    shops: '/shops',
  };
  static paymentPage = {
    payment: '/payment',
  };
  static loanPage = {
    loanProduct: '/loan-product',
    bnpl: '/bnpl',
    digikalaInstallment: '/digikala-installment',
  };
  static insurancePage = {
    thirdParty: '/third-party-insurance',
    electronicEquipment: '/electronic-equipment-insurance',
  };
  static businessServicesPage = {
    creditPaymentGateway: '/credit-payment-gateway',
    merchantLoan: '/merchant-loan',
    comprehensivePaymentGateway: '/comprehensive-payment-gateway',
    earlySettlement: '/early-settlement',
  };
  static organizationalServicesPage = {
    organizationalInstallment: '/organizational-installment',
    organizationalBnpl: '/organizational-bnpl',
  };
  static aboutPage = {
    about: '/about',
    annualReport: '/annual-report',
    careers: '/careers',
    blog: '/blog',
    technicalDocs: '/technical-docs',
  };
  static specialServicesPage = {
    specialFinancialServices: '/special-financial-services',
  };
}
export function routeWithoutSlash(path: string): string {
  if (path.startsWith('/')) {
    return path.replace('/', '');
  } else {
    return path;
  }
}

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
  static wealthPage = {
    wealth: '/wealth',
  };
  static hubPage = {
    hub: '/hub',
  };
}
export function routeWithoutSlash(path: string): string {
  if (path.startsWith('/')) {
    return path.replace('/', '');
  } else {
    return path;
  }
}

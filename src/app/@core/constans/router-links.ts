export class RouterLinksPath {
  static gamesPage = {
    singleRoulette: '/single-roulette',
    doubleRoulette: '/double-roulette',
    tripleRoulette: '/triple-roulette',
    paperScissorsRock: '/paper-scissors-rock',
    jackpot: '/jackpot',
    quiz: '/quiz',
  };

}

export function routeWithoutSlash(path: string): string {
  if (path.startsWith('/')) {
    return path.replace('/', '')
  } else {
    return path;
  }
}

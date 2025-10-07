export class RouterLinksPath {
  static wealthPage = {
    wealth: '/wealth',
  };

}

export function routeWithoutSlash(path: string): string {
  if (path.startsWith('/')) {
    return path.replace('/', '')
  } else {
    return path;
  }
}

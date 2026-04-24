export interface INavigationItem {
  routerLink: string;
  icon: string;
  label: string;
  exact?: boolean;
  hasBadge?: boolean;
  queryParams?: unknown;
  linear: boolean;
}

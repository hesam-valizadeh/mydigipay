import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
  /** Breakpoints definition (you can adjust as needed) */
  private readonly breakpoints = {
    xs: '(max-width: 1199px)',
    sm: '(min-width: 600px) and (max-width: 959px)',
    md: '(min-width: 960px) and (max-width: 1279px)',
    lg: '(min-width: 1200px)',
    xl: '(min-width: 1920px)',
  };

  /** Signals for each breakpoint */
  readonly isXs = signal(false);
  readonly isSm = signal(false);
  readonly isMd = signal(false);
  readonly isLg = signal(false);
  readonly isXl = signal(false);
  /** Combined signals */
  readonly isMobile = computed(() => this.isXs());
  readonly isTablet = computed(() => this.isMd());
  readonly isDesktop = computed(() => this.isLg());

  constructor() {
    // Only run in browser (avoid SSR issues)
    if (typeof window === 'undefined') return;

    this.initListeners();
  }

  /** Initialize all matchMedia listeners */
  private initListeners() {
    Object.entries(this.breakpoints).forEach(([key, query]) => {
      const media = window.matchMedia(query);
      this.updateSignal(key, media.matches);

      // Listen for changes
      media.addEventListener('change', e => this.updateSignal(key, e.matches));
    });
  }

  /** Map breakpoint name to signal */
  private updateSignal(breakpoint: string, value: boolean) {
    switch (breakpoint) {
      case 'xs': this.isXs.set(value); break;
      case 'sm': this.isSm.set(value); break;
      case 'md': this.isMd.set(value); break;
      case 'lg': this.isLg.set(value); break;
      case 'xl': this.isXl.set(value); break;
    }
  }

  /** Optional utility for debugging */
  getCurrentSize(): string {
    if (this.isXs()) return 'XS';
    if (this.isSm()) return 'SM';
    if (this.isMd()) return 'MD';
    if (this.isLg()) return 'LG';
    if (this.isXl()) return 'XL';
    return 'Unknown';
  }
}

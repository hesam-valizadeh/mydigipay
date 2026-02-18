import { computed, Injectable, signal, WritableSignal } from '@angular/core';
import { BreakpointKey } from '../models/types/responsive.types';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  public readonly isXs: WritableSignal<boolean> = signal(false);
  public readonly isSm: WritableSignal<boolean> = signal(false);
  public readonly isMd: WritableSignal<boolean> = signal(false);
  public readonly isLg: WritableSignal<boolean> = signal(false);
  public readonly isXl: WritableSignal<boolean> = signal(false);

  public readonly isMobile = computed(() => this.isXs());
  public readonly isTablet = computed(() => this.isMd());
  public readonly isDesktop = computed(() => this.isLg());

  private readonly breakpoints: Record<BreakpointKey, string> = {
    xs: '(max-width: 1199px)',
    sm: '(min-width: 600px) and (max-width: 959px)',
    md: '(min-width: 960px) and (max-width: 1279px)',
    lg: '(min-width: 1200px)',
    xl: '(min-width: 1920px)',
  };

  public constructor() {
    if (typeof window === 'undefined') return;
    this.initListeners();
  }

  public getCurrentSize(): string {
    if (this.isXs()) return 'XS';
    if (this.isSm()) return 'SM';
    if (this.isMd()) return 'MD';
    if (this.isLg()) return 'LG';
    if (this.isXl()) return 'XL';
    return 'Unknown';
  }

  private initListeners(): void {
    Object.entries(this.breakpoints).forEach(([key, query]) => {
      const media = window.matchMedia(query);
      this.updateSignal(key, media.matches);

      media.addEventListener('change', (e) => this.updateSignal(key, e.matches));
    });
  }

  private updateSignal(breakpoint: string, value: boolean): void {
    switch (breakpoint) {
      case 'xs':
        this.isXs.set(value);
        break;
      case 'sm':
        this.isSm.set(value);
        break;
      case 'md':
        this.isMd.set(value);
        break;
      case 'lg':
        this.isLg.set(value);
        break;
      case 'xl':
        this.isXl.set(value);
        break;
    }
  }
}

import {
  Component,
  ChangeDetectionStrategy,
  ElementRef,
  EventEmitter,
  HostListener,
  inject,
  OnInit,
  Output,
  signal,
} from '@angular/core';
import { routerLinksPath } from '../../@core/constants/router-links';
import { NavigationEnd, Router, RouterLink, RouterModule } from '@angular/router';
import { SearchBoxComponent } from '../../@shared/components/search-box/search-box.component';
import { IHeaderViewDataInterface } from '../../view-models/header-view-data.interface';
import { ResponsiveService } from '../../@core/services/responsive.service';
import { NgOptimizedImage } from '@angular/common';
import { filter } from 'rxjs';
import { SearchOverlayService } from '../../@core/services/search-overlay-service.service';

const SCROLL_THRESHOLD_START = 200;
const SCROLL_THRESHOLD_END = 250;

@Component({
  selector: 'app-header',
  imports: [SearchBoxComponent, RouterModule, NgOptimizedImage, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  public eRef = inject(ElementRef);
  public responsive = inject(ResponsiveService);
  public routerLinksPath = routerLinksPath;
  public searchOverlay = inject(SearchOverlayService);

  @Output() public overlayToggle = new EventEmitter<boolean>();

  public data: IHeaderViewDataInterface = {
    loansAndCredits: 'وام و اعتبار',
    credit: 'وام خرید کالا',
    bnpl: 'الان بخر بعدا پرداخت کن',
    merchants: 'خرید اقساطی از دیجی‌کالا',
    insurance: 'بیمه',
    thirdPartyInsurance: 'بیمه شخص ثالث',
    equipment: 'بیمه تجهیزات الکترونیک',
    wealth: 'مدیریت سرمایه',
    serviceBusiness: 'خدمات کسب و کارها',
    bpg: 'درگاه پرداخت اعتباری',
    merchantsSeller: 'وام فروشندگان',
    ipg: 'درگاه پرداخت جامع',
    merchantCredit: 'تسویه زودهنگام',
    serviceOrganization: 'خدمات سازمانی',
    Ocredit: 'خرید اقساطی از دیجی‌کالا',
    orgbnpl: 'الان بخر بعدا پرداخت کن',
  };

  public showSearch = signal(true);
  public isSubmenuOpen = signal(false);
  public isToggleSearch = signal(false);
  public isStickyHeaderVisible = signal(false);

  private readonly _isSubmenuGamesOpen = signal(true);

  public get submenuGamesOpen(): boolean {
    return this._isSubmenuGamesOpen();
  }

  private readonly router = inject(Router);
  private readonly elementRef = inject(ElementRef);

  constructor() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      const url = this.router.url.trim();
      const isHome = url === '/' || url === '' || url === '/home';
      this.showSearch.set(isHome);
    });
  }

  ngOnInit(): void {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.isSubmenuOpen.set(false);
      this._isSubmenuGamesOpen.set(true);
    });

    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      setTimeout(() => window.scrollTo(0, 0), 0);
    });
  }

  public get isMobile(): boolean {
    return this.responsive.isMobile();
  }

  public get isDesktop(): boolean {
    return this.responsive.isDesktop();
  }

  public toggleSubmenu(): void {
    this.isSubmenuOpen.update((prev) => !prev);
  }

  public toggleSubmenuGames(): void {
    this._isSubmenuGamesOpen.update((prev) => !prev);
  }

  public onOverlayToggle(event: boolean): void {
    this.overlayToggle.emit(event);
  }

  @HostListener('window:scroll', [])
  public onScroll(): void {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    if (scrollY > SCROLL_THRESHOLD_START && !this.isStickyHeaderVisible()) {
      this.isStickyHeaderVisible.set(true);
    } else if (scrollY <= SCROLL_THRESHOLD_END && this.isStickyHeaderVisible()) {
      this.isStickyHeaderVisible.set(false);
    }
  }

  @HostListener('document:click', ['$event'])
  public onDocumentClick(event: MouseEvent): void {
    const container = this.elementRef.nativeElement as HTMLElement;
    if (!container.contains(event.target as Node)) {
      if (this.isSubmenuOpen() || this.submenuGamesOpen) {
        this.isSubmenuOpen.set(false);
        this._isSubmenuGamesOpen.set(false);
      }
    }
  }

  public toggleSearch(): void {
    this.isToggleSearch.update((prev) => !prev);
    const stickySearch = document.querySelector('.header-sticky_search');

    if (stickySearch instanceof HTMLElement) {
      if (this.isToggleSearch()) {
        stickySearch.classList.add('hidden');
        const header = document.querySelector('header');
        const headerHeight = header?.clientHeight ?? 0;
        window.scrollTo({ top: headerHeight, behavior: 'smooth' });
      } else {
        stickySearch.classList.remove('hidden');
      }
    }
  }

  @HostListener('document:click', ['$event'])
  public clickOutside(event: Event): void {
    const container = this.eRef.nativeElement as HTMLElement;
    if (this.isToggleSearch() && !container.contains(event.target as Node)) {
      this.isToggleSearch.set(false);
      const stickySearch = document.querySelector('.header-sticky_search');
      if (stickySearch instanceof HTMLElement) {
        stickySearch.classList.remove('hidden');
      }
    }
  }
}

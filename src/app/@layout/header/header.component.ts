import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  inject,
  OnInit,
  Output,
  signal,
  WritableSignal,
} from '@angular/core';
import { routerLinksPath } from '../../@core/constants/router-links';
import { NavigationEnd, Router, RouterLink, RouterModule } from '@angular/router';
import { SearchBoxComponent } from '../../@shared/components/search-box/search-box.component';
import { IHeaderViewDataInterface } from '../../view-models/header-view-data.interface';
import { ResponsiveService } from '../../@core/services/responsive.service';
import { NgOptimizedImage } from '@angular/common';
import { filter } from 'rxjs';
import { SearchOverlayService } from '../../@core/services/search-overlay-service.service';

@Component({
  selector: 'app-header',
  imports: [SearchBoxComponent, RouterModule,NgOptimizedImage,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isSubmenuOpen = signal(false);
  isSubmenuGamesOpen = signal(true);
  isStickyHeaderVisible = signal(false);
  isToggleSearch = signal(false);
  searchOverlay = inject(SearchOverlayService);
  private readonly router = inject(Router);
  private readonly elementRef = inject(ElementRef);
  eRef = inject(ElementRef);
  responsive = inject(ResponsiveService);

  protected readonly routerLinksPath = routerLinksPath;
  data: IHeaderViewDataInterface = {
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
    merchantsSeller: 'وام فروشمدگان',
    ipg: 'درگاه پرداخت جامع',
    merchantCredit: 'تسویه زودهنگام',
    serviceOrganization: 'خدمات سازمانی',
    Ocredit: 'خرید اقساطی از دیجی‌کالا',
    orgbnpl: 'الان بخر بعدا پرداخت کن',
  };
  ngOnInit() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.isSubmenuOpen.set(false);
      this.isSubmenuGamesOpen.set(true);
    });

    //Reset Scroll 
    this.router.events
  .pipe(filter(event => event instanceof NavigationEnd))
  .subscribe(() => {
    setTimeout(() => window.scrollTo(0, 0), 0);
  });
  }
  toggleSubmenu() {
    this.isSubmenuOpen.update((prev) => !prev);
  }
  showSearch: WritableSignal<boolean> = signal(true);

  constructor() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const url = this.router.url.trim();
        const isHome =
          url === '/' ||
          url === '' ||
          url === '/home';
  
        this.showSearch.set(isHome);
      });
  }
  toggleSubmenuGames() {
    this.isSubmenuGamesOpen.update((prev) => !prev);
  }
  @Output() overlayToggle = new EventEmitter<boolean>();
  onOverlayToggle(event: boolean) {
    this.overlayToggle.emit(event);
  }
  @HostListener('window:scroll', [])
  onScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    if (scrollY > 200 && !this.isStickyHeaderVisible()) {
      this.isStickyHeaderVisible.set(true);
    } else if (scrollY <= 250 && this.isStickyHeaderVisible()) {
      this.isStickyHeaderVisible.set(false);
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const container = this.elementRef.nativeElement as HTMLElement;
    const target = event.target as Node; 
    const clickedInside = container.contains(target);
    
    if (!clickedInside && (this.isSubmenuOpen() || this.isSubmenuGamesOpen())) {
      this.isSubmenuOpen.set(false);
      this.isSubmenuGamesOpen.set(false);
    }
  }

  toggleSearch() {
    this.isToggleSearch.update((prev) => !prev);
    const stickySearch = document.querySelector('.header-sticky_search') as HTMLElement;
    if (stickySearch) {
      if (this.isToggleSearch()) {
        stickySearch.classList.add('hidden');
      } else {
        stickySearch.classList.remove('hidden');
      }
    }
    if (this.isToggleSearch()) {
      const headerHeight = document.querySelector('header')?.clientHeight || 0;
      window.scrollTo({
        top: headerHeight,
        behavior: 'smooth',
      })
    }
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event): void {
    const container = this.eRef.nativeElement as HTMLElement;
    const target = event.target as Node;

    if (this.isToggleSearch() && target && !container.contains(target)) {
      this.isToggleSearch.set(false);
      const stickySearch = document.querySelector('.header-sticky_search');
      stickySearch?.classList.remove('hidden');
    }
  }
}
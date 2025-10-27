import { Component, ElementRef, HostListener, inject, OnInit, signal } from '@angular/core';
import { RouterLinksPath } from '../../@core/constants/router-links';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { SearchBoxComponent } from '../../@shared/components/search-box/search-box.component';
import { HeaderViewDataInterface } from '../../view-models/header-view-data.interface';
import { ResponsiveService } from '../../@core/services/responsive.service';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [
    SearchBoxComponent,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  isSubmenuOpen = signal(false);
  isSubmenuGamesOpen = signal(true);

  private viewportScroller = inject(ViewportScroller);
  private router = inject(Router);
  private elementRef = inject(ElementRef);
  protected readonly RouterLinksPath = RouterLinksPath;
  responsive = inject(ResponsiveService);
  data: HeaderViewDataInterface = {
    loansAndCredits: "وام و اعتبار",
    credit: "وام خرید کالا",
    bnpl: "الان بخر بعدا پرداخت کن",
    merchants: "خرید اقساطی از دیجی‌کالا",
    insurance: "بیمه",
    thirdPartyInsurance: "بیمه شخص ثالث",
    equipment: "بیمه تجهیزات الکترونیک",
    wealth: "مدیریت سرمایه",
    serviceOrganization: "خدمات کسب و کارها",
    bpg: "درگاه پرداخت اعتباری"
  }
  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isSubmenuOpen.set(false);
      this.isSubmenuGamesOpen.set(true);
    })
  }
  toggleSubmenu() {
    this.isSubmenuOpen.update(prev => !prev);
  }

  toggleSubmenuGames() {
    this.isSubmenuGamesOpen.update(prev => !prev);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside && (this.isSubmenuOpen() || this.isSubmenuGamesOpen())) {
      this.isSubmenuOpen.set(false);
      this.isSubmenuGamesOpen.set(false);
    }
  }
}

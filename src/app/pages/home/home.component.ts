import { Component, inject, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { HeroCarouselComponent } from '../../components/hero-carousel/hero-carousel.component';
import { SquareBanner } from '../../components/square-banner/square-banner.component';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';
import { ProductSectionComponent } from '../../components/product-section/product-section.component';
import { IHomePageViewDataInterface } from '../../view-models/home-page-view-data.interface';
import { ListModel } from '../../@core/models/list-model';
import { ResponsiveService } from '../../@core/services/responsive.service';
import { SearchOverlayService } from '../../@core/services/search-overlay-service.service';
import { NgOptimizedImage } from '@angular/common';
import { homeData } from './constants/home-data.const';
import { IncredibleDiscountBoxComponent } from '@shared/components/incredible-discount-box/incredible-discount-box.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroCarouselComponent,
    SquareBanner,
    ServiceCardComponent,
    ProductSectionComponent,
    NgOptimizedImage,
    IncredibleDiscountBoxComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  public searchOverlay = inject(SearchOverlayService);
  public responsive = inject(ResponsiveService);
  public cdr = inject(ChangeDetectorRef);

  public get isDesktop(): boolean {
    return this.responsive.isDesktop();
  }

  public get isSearchOpen(): boolean {
    return this.searchOverlay.isSearchOpen();
  }
  public data: IHomePageViewDataInterface = homeData;
  public get sections(): Array<{ id: number; category?: string; products: ListModel<unknown> }> {
    const data = this.data;
    return Object.keys(data).map((key, index) => {
      const section = data[key as keyof IHomePageViewDataInterface];
      return {
        id: index + 1,
        category: section.category,
        products: new ListModel(section.sliderProducts),
        link: section.link ?? null,
      };
    });
  }
}

import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { HeroCarouselComponent } from '../../components/hero-carousel/hero-carousel.component';
import { SquareBanner } from '../../components/square-banner/square-banner.component';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';
import { ProductSectionComponent } from '../../components/product-section/product-section.component';
import { HomePageViewDataInterface } from '../../view-models/home-page-view-data.interface';
import { ListModel } from '../../@core/models/list-model';
import { ResponsiveService } from '../../@core/services/responsive.service';
import { BottomNavigationComponent } from '../../@layout/bottom-navigation/bottom-navigation.component';
import { SearchOverlayService } from '../../@core/services/search-overlay-service.service';
import { HomeService } from '../../@core/services/home.service';

@Component({
  selector: 'app-home',
  imports: [
    HeroCarouselComponent,
    SquareBanner,
    ServiceCardComponent,
    ProductSectionComponent,
    BottomNavigationComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  
})
export class HomeComponent {
  data!: HomePageViewDataInterface;
  searchOverlay = inject(SearchOverlayService);
  responsive = inject(ResponsiveService);
  homeService = inject(HomeService);
  cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.getHomePageSections();
  }
  getHomePageSections() {
    this.homeService.getHomePageSections().subscribe({
      next: (res) => {
        this.data = res;
        this.cdr.detectChanges(); 
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  get sections() {
    if (!this.data) return [];
    return Object?.values(this?.data).map((section, index) => ({
      id: index + 1,
      ...section,
      products: new ListModel(section?.sliderProducts || []),
    }));
  }
}

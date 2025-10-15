import { Component } from '@angular/core';
import { CustomSwiperComponent } from '../../@shared/components/custom-swiper/custom-swiper.component';
import { HomeCarouselWrapperDesktopComponent } from '../../components/home-carousel-wrapper-desktop/home-carousel-wrapper-desktop.component';
import { SquareBanner } from '../../components/square-banner/square-banner.component';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';
import { ProductSectionComponent } from '../../components/product-section/product-section.component';

@Component({
  selector: 'app-home',
  imports: [CustomSwiperComponent, HomeCarouselWrapperDesktopComponent, SquareBanner, ServiceCardComponent,ProductSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',

})
export class HomeComponent {
}

import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CustomSwiperComponent } from '../../@shared/components/custom-swiper/custom-swiper.component';
import { HomeCarouselWrapperDesktopComponent } from '../../component/home-carousel-wrapper-desktop/home-carousel-wrapper-desktop.component';
import { DesktopSquareBanner } from '../../component/desktop-square-banners/desktop-square-banner.component';

@Component({
  selector: 'app-home',
  imports: [CustomSwiperComponent,HomeCarouselWrapperDesktopComponent,DesktopSquareBanner],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',

})
export class HomeComponent {
}

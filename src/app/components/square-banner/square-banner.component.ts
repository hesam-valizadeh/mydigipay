import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomSwiperComponent } from '../../@shared/components/custom-swiper/custom-swiper.component';
import { SwiperOptions } from 'swiper/types';
import { ListModel } from '../../@core/models/list-model';
import { SquareBannerItem } from './square-banner-item/square-banner-item.component';
import { ISquareBannerCarousel } from './model/carousel-inerface';

@Component({
  selector: 'app-square-banner',
  imports: [CustomSwiperComponent, SquareBannerItem],
  standalone: true,
  templateUrl: './square-banner.component.html',
  styleUrl: './square-banner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class SquareBanner {
  public slider?: ListModel<ISquareBannerCarousel> = new ListModel<ISquareBannerCarousel>([
    {
      id: 1,
      image: 'assets/images/banner/01.webp',
      width: '748',
    },
    {
      id: 2,
      image: 'assets/images/banner/02.webp',
      width: '748',
    },
    {
      id: 3,
      image: 'assets/images/banner/03.webp',
      width: '748',
    },
  ]);

  public SwiperConfig: SwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 15,
    centeredSlides: false,
    grabCursor: true,
    loopPreventsSliding: false,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      type: 'bullets',
      el: '',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {},
  };
}

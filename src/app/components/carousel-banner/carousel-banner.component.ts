import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListModel } from '@core/models/list-model';
import { CustomSwiperComponent } from '@shared/components/custom-swiper/custom-swiper.component';
import { SwiperOptions } from 'swiper/types';
import { CarouselBannerItemComponent } from './carousel-banner-item/carousel-banner-item.component';
import { ICarouselBanner } from './model/carousel-banner-interface';

@Component({
  selector: 'app-carousel-banner',
  imports: [CustomSwiperComponent, CarouselBannerItemComponent],
  templateUrl: './carousel-banner.component.html',
  styleUrl: './carousel-banner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselBannerComponent {
  public slider?: ListModel<ICarouselBanner> = new ListModel<ICarouselBanner>([
    {
      id: '1',
      src: 'assets/images/01.webp',
      alt: 'test',
      width: '748',
      height: '400',
      link: '',
      title: 'test',
    },
    {
      id: '2',
      src: 'assets/images/02.webp',
      alt: 'test',
      width: '748',
      height: '400',
      link: '',
      title: 'test',
    },
  ]);
  public SwiperConfig: SwiperOptions = {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 2,
    loop: true,

    pagination: {
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    injectStyles: [
      `
        .swiper-pagination-bullet {
            background-color: #C9CBCF !important;
            opacity: 1;
            width: 6px;
            height: 6px;
            border-radius: 30px;
            margin: 0 4px;
        }

        .swiper-pagination-bullet.swiper-pagination-bullet-active {
            width: 14px !important;
            background-color: #fff !important;
        }
        `,
    ],
    breakpoints: {
      768: {
        slidesPerView: 1.2,
      },
      1024: {
        slidesPerView: 1.2,
      },
    },
  };
}

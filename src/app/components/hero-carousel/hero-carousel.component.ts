import { Component } from '@angular/core';
import { CustomSwiperComponent } from '../../@shared/components/custom-swiper/custom-swiper.component';
import { SwiperOptions } from 'swiper/types';
import { ListModel } from '../../@core/models/list-model';
import { HeroCarousel } from './model/carousel-inerface';
import { HeroCarouselItemComponent } from './hero-carousel-item/hero-carousel-item.component';

@Component({
  selector: 'app-hero-carousel',
  imports: [CustomSwiperComponent, HeroCarouselItemComponent],
  templateUrl: './hero-carousel.component.html',
  styleUrl: './hero-carousel.component.scss',
})
export class HeroCarouselComponent {
  slider?: ListModel<HeroCarousel> = new ListModel<HeroCarousel>([
    {
      id: 1,
      image: 'assets/images/01.webp',
    },
    {
      id: 2,
      image: 'assets/images/02.webp',
    },
    {
      id: 3,
      image: 'assets/images/03.webp',
    },
    {
      id: 4,
      image: 'assets/images/04.webp',
    },
    {
      id: 5,
      image: 'assets/images/05.webp',
    },
    {
      id: 6,
      image: 'assets/images/06.webp',
    },
    {
      id: 7,
      image: 'assets/images/07.webp',
    },
    {
      id: 8,
      image: 'assets/images/08.webp',
    },
    {
      id: 9,
      image: 'assets/images/09.webp',
    },
  ]);

  SwiperConfig: SwiperOptions = {
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
    breakpoints: {},
  };
}

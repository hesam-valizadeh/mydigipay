import { Component, Input } from '@angular/core';
import { CustomSwiperComponent } from '../../@shared/components/custom-swiper/custom-swiper.component';
import { SwiperOptions } from 'swiper/types';
import { ListModel } from '../../@core/models/list-model';
import { HomeCarouselWrapperDesktop } from '../model/carousel-inerface';
import { SquareBannerItem } from './square-banner-item/square-banner-item.component';

@Component({
  selector: 'app-square-banner',
  imports: [CustomSwiperComponent, SquareBannerItem],
  standalone:true,
  templateUrl: './square-banner.component.html',
  styleUrl: './square-banner.component.scss'
})
export class SquareBanner {

  slider?: ListModel<HomeCarouselWrapperDesktop> | any = new ListModel([
    {
      id: 1,
      image: "assets/images/banner/01.webp",
      width:"748"
    },
     {
      id: 2,
      image: "assets/images/banner/02.webp",
      width:"748"
      
    },
     {
      id: 3,
      image: "assets/images/banner/03.webp",
      width:"748"
      
    }
  
  ])

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
      el:""
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    injectStyles: [
      `
        :host ::ng-deep .swiper-slide {
        width: 748px !important;
         }

      @media (max-width: 768px) {
        .swiper-slide {
          width: 100% !important;
        }
      }
  
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

}`
    ],
    breakpoints: {}
  };
}

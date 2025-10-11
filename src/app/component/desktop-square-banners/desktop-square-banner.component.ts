import { Component, Input } from '@angular/core';
import { CustomSwiperComponent } from '../../@shared/components/custom-swiper/custom-swiper.component';
import { SwiperOptions } from 'swiper/types';
import { ListModel } from '../../@core/models/list-model';
import { HomeCarouselWrapperDesktop } from '../model/carousel-inerface';
import { DesktopSquareBannersItem } from './desktop-square-banners-item/desktop-square-banners-item.component';

@Component({
  selector: 'app-desktop-square-banner',
  imports: [CustomSwiperComponent, DesktopSquareBannersItem],
  templateUrl: './desktop-square-banner.component.html',
  styleUrl: './desktop-square-banner.component.scss'
})
export class DesktopSquareBanner {

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

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CustomSwiperComponent } from '../custom-swiper/custom-swiper.component';
import { CarouselServicesItemComponent } from './carousel-services-item/carousel-services-item.component';
import { ListModel } from '../../../@core/models/list-model';
import { IServicesCarousel } from './model/services-carousel-inerface';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-carousel-services',
  imports: [CustomSwiperComponent, CarouselServicesItemComponent],
  templateUrl: './carousel-services.component.html',
  styleUrl: './carousel-services.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselServicesComponent {
  public slider?: ListModel<IServicesCarousel> = new ListModel<IServicesCarousel>([
    {
      id: 1,
      class: '',
      src: 'assets/images/contact-us/item-1.webp',
      title: ' خرید شارژ ',
    },
    {
      id: 2,
      title: ' خرید بسته اینترنت ',
      class: '',
      src: 'assets/images/contact-us/item-2.webp',
    },
    {
      id: 3,
      title: ' کارت به کارت ',
      class: '',
      src: 'assets/images/contact-us/item-3.webp',
    },
    {
      id: 4,
      title: ' خرید اقساطی ',
      class: '',
      src: 'assets/images/contact-us/item-4.webp',
    },
    {
      id: 5,
      title: ' درگاه پرداخت هوشمند ',
      class: '',
      src: 'assets/images/contact-us/item-5.webp',
    },
    {
      id: 6,
      title: ' پرداخت‌یار ',
      class: '',
      src: 'assets/images/contact-us/item-6.webp',
    },
  ]);

  public SwiperConfig: SwiperOptions = {
    slidesPerView: 5,
    centeredSlides: false,
    grabCursor: true,
    loopPreventsSliding: false,
    pagination: {
      type: 'bullets',
      el: '',
    },
    loop: false,
  };
}

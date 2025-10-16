import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { ListModel } from '../../@core/models/list-model';
import { CustomSwiperComponent } from '../../@shared/components/custom-swiper/custom-swiper.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductCarousel } from './model/carousel-inerface';

@Component({
  selector: 'app-product-section',
  imports: [CustomSwiperComponent, ProductItemComponent],
  templateUrl: './product-section.component.html',
})
export class ProductSectionComponent {

  slider: ListModel<ProductCarousel> | any = new ListModel([
    {
      id: 1,
      imageSrc: "assets/images/product/arta/01.webp",
      alt: "کلید لمسی هوشمند چهار پل Zigbee نستک سری INNOVA کد NE5LS01XG4",
      width: "147",
      height: "147",
      loading: "lazy",
      storeLogoSrc: "assets/images/product/arta/arta.svg"
    },
    {
      id: 2,
      imageSrc: "assets/images/product/arta/02.webp",
      alt: "کلید لمسی هوشمند چهار پل Zigbee نستک سری INNOVA کد NE5LS01XG4",
      width: "147",
      height: "147",
      loading: "lazy",
      storeLogoSrc: "assets/images/product/arta/arta.svg"
    },
    {
      id: 3,
      imageSrc: "assets/images/product/arta/03.webp",
      alt: "کلید لمسی هوشمند چهار پل Zigbee نستک سری INNOVA کد NE5LS01XG4",
      width: "147",
      height: "147",
      loading: "lazy",
      storeLogoSrc: "assets/images/product/arta/arta.svg"
    },
    {
      id: 4,
      imageSrc: "assets/images/product/arta/04.webp",
      alt: "کلید لمسی هوشمند چهار پل Zigbee نستک سری INNOVA کد NE5LS01XG4",
      width: "147",
      height: "147",
      loading: "lazy",
      storeLogoSrc: "assets/images/product/arta/arta.svg"
    },
    {
      id: 5,
      imageSrc: "assets/images/product/arta/05.webp",
      alt: "کلید لمسی هوشمند چهار پل Zigbee نستک سری INNOVA کد NE5LS01XG4",
      width: "147",
      height: "147",
      loading: "lazy",
      storeLogoSrc: "assets/images/product/arta/arta.svg"
    },
    {
      id: 6,
      imageSrc: "assets/images/product/arta/06.webp",
      alt: "کلید لمسی هوشمند چهار پل Zigbee نستک سری INNOVA کد NE5LS01XG4",
      width: "147",
      height: "147",
      loading: "lazy",
      storeLogoSrc: "assets/images/product/arta/arta.svg"
    },
    {
      id: 7,
      imageSrc: "assets/images/product/arta/07.webp",
      alt: "کلید لمسی هوشمند چهار پل Zigbee نستک سری INNOVA کد NE5LS01XG4",
      width: "147",
      height: "147",
      loading: "lazy",
      storeLogoSrc: "assets/images/product/arta/arta.svg"
    },
    {
      id: 8,
      imageSrc: "assets/images/product/arta/08.webp",
      alt: "کلید لمسی هوشمند چهار پل Zigbee نستک سری INNOVA کد NE5LS01XG4",
      width: "147",
      height: "147",
      loading: "lazy",
      storeLogoSrc: "assets/images/product/arta/arta.svg"
    }
    ,
    {
      id: 9,
      imageSrc: "assets/images/product/arta/09.webp",
      alt: "کلید لمسی هوشمند چهار پل Zigbee نستک سری INNOVA کد NE5LS01XG4",
      width: "147",
      height: "147",
      loading: "lazy",
      storeLogoSrc: "assets/images/product/arta/arta.svg"
    }, {
      id: 10,
      imageSrc: "assets/images/product/arta/10.webp",
      alt: "کلید لمسی هوشمند چهار پل Zigbee نستک سری INNOVA کد NE5LS01XG4",
      width: "147",
      height: "147",
      loading: "lazy",
      storeLogoSrc: "assets/images/product/arta/arta.svg"
    }

  ])

  SwiperConfig: SwiperOptions = {
    slidesPerView: 6.8,
    spaceBetween: 8,
    centeredSlides: false,
    grabCursor: true,
    loopPreventsSliding: false,
    pagination: {
      type: 'bullets',
      el: ""
    },
  
    breakpoints: {}
  };
}

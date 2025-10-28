import { Component, Input } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { ListModel } from '../../@core/models/list-model';
import { CustomSwiperComponent } from '../../@shared/components/custom-swiper/custom-swiper.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductCarousel } from './model/carousel-inerface';

@Component({
  selector: 'app-product-section',
  imports: [CustomSwiperComponent, ProductItemComponent],
  templateUrl: './product-section.component.html',
  styleUrl: './product-section.component.scss',
})
export class ProductSectionComponent {
  @Input() category!: string;
  @Input() storeName!: string | undefined;
  @Input() products!: ListModel<ProductCarousel>;
  @Input() imageSrc!: string | undefined;
  @Input() alt!: string | undefined;
  @Input() width!: string | undefined;
  @Input() height!: string | undefined;
  @Input() title!: string | undefined;
  @Input() loading!: string | undefined;
  @Input() storeLogoSrc!: string | undefined;
  @Input() priceNoDiscount!: string | undefined;
  @Input() priceFinal!: string | undefined;
  @Input() discountPercentage!: string | undefined;
  get slider() {
    return this.products || new ListModel([]);
  }

  SwiperConfig: SwiperOptions = {
    slidesPerView: 6.8,
    spaceBetween: 8,
    centeredSlides: false,
    grabCursor: true,
    loopPreventsSliding: false,
    pagination: {
      type: 'bullets',
      el: '',
    },
    breakpoints: {},
  };
}

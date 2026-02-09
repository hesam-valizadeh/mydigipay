import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { ListModel } from '../../@core/models/list-model';
import { CustomSwiperComponent } from '../../@shared/components/custom-swiper/custom-swiper.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { IProductCarousel } from './model/carousel-inerface';

@Component({
  selector: 'app-product-section',
  imports: [CustomSwiperComponent, ProductItemComponent],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-section.component.html',
  styleUrl: './product-section.component.scss',
})
export class ProductSectionComponent {
  @Input() public category!: string;
  @Input() public storeName!: string | undefined;
  @Input() public fourPay!: boolean | undefined;
  @Input() public products!: ListModel<IProductCarousel>;
  @Input() public imageSrc!: string | undefined;
  @Input() public alt!: string | undefined;
  @Input() public width!: string | undefined;
  @Input() public height!: string | undefined;
  @Input() public title!: string | undefined;
  @Input() public loading!: string | undefined;
  @Input() public storeLogoSrc!: string | undefined;
  @Input() public priceNoDiscount!: string | undefined;
  @Input() public priceFinal!: string | undefined;
  @Input() public discountPercentage!: string | undefined;
  get slider() {
    return this.products || new ListModel([]);
  }

  SwiperConfig: SwiperOptions = {
    centeredSlides: false,
    grabCursor: true,
    loopPreventsSliding: false,
    pagination: {
      type: 'bullets',
      el: '',
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 12,
      },
      360: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      500: {
        slidesPerView: 3,
        spaceBetween: 12,
      },
      677: {
        slidesPerView: 4,
        spaceBetween: 2,
      },
      780: {
        slidesPerView: 4.5,
        spaceBetween: 12,
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 12,
      },
      1200: {
        slidesPerView: 6.8,
        spaceBetween: 8,
      },
    },
  };
}

import { IProductCarousel } from 'src/app/components/product-section/model/carousel-inerface';

export interface IIncredibleDiscountDataInterface {
  incredibleDiscount: {
    category?: string;
    image?: string;
    description?: string[];
    link?: string;
    sliderProducts?: IProductCarousel[] | undefined;
    timerEndDate?: string;
  };
}

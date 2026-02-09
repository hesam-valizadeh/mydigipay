import { IProductCarousel } from '../components/product-section/model/carousel-inerface';

export interface IHomePageViewDataInterface {
  smartSwitches: {
    category?: string;
    image?: string;
    description?: string[];
    link?: string;
    sliderProducts?: IProductCarousel[] | undefined;
  };
  carSmartAccessories: {
    category?: string;
    image?: string;
    description?: string[];
    link?: string;
    sliderProducts?: IProductCarousel[] | undefined;
  };
  mobileAccessoriesDigiLand: {
    category?: string;
    image?: string;
    description?: string[];
    link?: string;
    sliderProducts?: IProductCarousel[] | undefined;
  };
  womenBagsAndShoes: {
    category?: string;
    image?: string;
    description?: string[];
    link?: string;
    sliderProducts?: IProductCarousel[] | undefined;
  };
}

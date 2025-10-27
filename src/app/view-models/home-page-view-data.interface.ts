import { ProductCarousel } from "../components/product-section/model/carousel-inerface";

export interface HomePageViewDataInterface {
  downloadApp:string,
  smartSwitches: {
    category?: string,
    image?: string,
    description?: string[],
    link?: string,
    sliderProducts?: ProductCarousel[] | undefined; 

  },
  carSmartAccessories: {
  category?: string,
    image?: string,
    description?: string[],
    link?: string,
    sliderProducts?: ProductCarousel[] | undefined; 
  },
  mobileAccessoriesDigiLand: {
  category?: string,
    image?: string,
    description?: string[],
    link?: string,
    sliderProducts?: ProductCarousel[] | undefined; 
  },
  womenBagsAndShoes: {
  category?: string,
    image?: string,
    description?: string[],
    link?: string,
    sliderProducts?: ProductCarousel[] | undefined; 
  },
}


export interface ProductCarousel {
  id: number;
  imageSrc: string;
  alt: string;
  title: string;
  storeName: string;
  priceFinal: string;
  discountPercentage?: string;
  width: string;
  height: string;
  loading: string;
  priceNoDiscount?: string;
  storeLogoSrc: string;
}

export interface IProductCarousel {
  id: number;
  imageSrc: string;
  alt: string;
  title: string;
  storeName: string;
  priceFinal: string;
  discountPercentage?: string;
  width: string;
  height: string;
  priceNoDiscount?: string;
  storeLogoSrc: string;
  storeRate?: string;
  fourPay?: boolean;
}

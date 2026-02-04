import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  imports: [NgOptimizedImage],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
})
export class ProductItemComponent {
  @Input() src: string = '';
  @Input() width: string | undefined = '';
  @Input() height: string | undefined = '';
  @Input() alt: string | undefined = '';
  @Input() title: string | undefined = '';
  @Input() storeName: string | undefined = '';
  @Input() priceFinal: string | undefined = '';
  @Input() storeLogoSrc: string = '';
  @Input() discountPercentage: string | undefined = '';
  @Input() priceNoDiscount: string | undefined = '';
  @Input() storeRate: string | undefined = '';
  @Input() fourPay!: boolean | undefined ;
}

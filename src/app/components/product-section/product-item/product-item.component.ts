import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  imports: [NgOptimizedImage],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
})
export class ProductItemComponent {
  @Input() public src: string = '';
  @Input() public width: string | undefined = '';
  @Input() public height: string | undefined = '';
  @Input() public alt: string | undefined = '';
  @Input() public title: string | undefined = '';
  @Input() public storeName: string | undefined = '';
  @Input() public priceFinal: string | undefined = '';
  @Input() public storeLogoSrc: string = '';
  @Input() public discountPercentage: string | undefined = '';
  @Input() public priceNoDiscount: string | undefined = '';
  @Input() public storeRate: string | undefined = '';
  @Input() public fourPay!: boolean | undefined;
}

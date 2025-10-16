import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.component.html',
})
export class ProductItemComponent {
  @Input() src: string | undefined | null = '';
  @Input() width: string = '';
  @Input() height:string = '';
  @Input() alt: string | undefined = '';
  @Input() title: string | undefined = '';
  
  @Input() loading:string = '';
  @Input() storeLogoSrc:string = '';
}

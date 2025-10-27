import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square-banner-item',
  imports: [],
  standalone:true,
  templateUrl: './square-banner-item.component.html',
  styleUrl:'./square-banner-item.component.scss'
})
export class SquareBannerItem  {
  @Input() src?: string | undefined | null = '';
  @Input() alt?: string | undefined = '';
  @Input() title?: string | undefined = '';
  @Input() description?: string | undefined = '';
  @Input() brand?: string | undefined = '';
  @Input() link?: string | undefined = '';
  @Input() isActive?: boolean = false;
  @Input() textBrand?: string = '';
  @Input() viewBtnText?: string = '';
  @Input() icon?: string = '';
  @Input() width = '320';
  @Input() btn?: boolean = false;
}

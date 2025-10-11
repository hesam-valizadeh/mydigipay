import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-desktop-square-banners-item',
  imports: [],
  templateUrl: './desktop-square-banners-item.component.html',
  styleUrl: './desktop-square-banners-item.component.scss'
})
export class DesktopSquareBannersItem  {
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
  @Input() width: string = '320';
  @Input() btn?: boolean = false;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-carousel-item',
  imports: [],
  templateUrl: './home-carousel-item.component.html',
  styleUrl: './home-carousel-item.component.scss'
})
export class HomeCarouselItemComponent {
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
  @Input() width: string = '748';
  @Input() btn?: boolean = false;
}

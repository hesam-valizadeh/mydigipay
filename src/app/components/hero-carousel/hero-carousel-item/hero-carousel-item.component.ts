import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-carousel-item',
  imports: [],
  templateUrl: './hero-carousel-item.component.html',
})
export class HeroCarouselItemComponent {
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

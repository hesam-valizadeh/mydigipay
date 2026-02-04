import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-services-item',
  imports: [NgOptimizedImage],
  templateUrl: './carousel-services-item.component.html',
  styleUrl: './carousel-services-item.component.scss',
})
export class CarouselServicesItemComponent {

  @Input() src?: string;
  @Input() alt?: string;
  @Input() title?: string;
  @Input() description?: string;
  @Input() brand?: string;
  @Input() link?: string;
  @Input() className?: string;
  @Input() styleAttr?: string;

}

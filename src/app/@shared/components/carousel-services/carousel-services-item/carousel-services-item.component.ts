import { NgOptimizedImage } from '@angular/common';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-carousel-services-item',
  imports: [NgOptimizedImage],
  templateUrl: './carousel-services-item.component.html',
  styleUrl: './carousel-services-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselServicesItemComponent {
  @Input() public src: string = '';
  @Input() public alt?: string;
  @Input() public title?: string;
  @Input() public description?: string;
  @Input() public brand?: string;
  @Input() public link?: string;
  @Input() public className?: string;
  @Input() public styleAttr?: string;
}

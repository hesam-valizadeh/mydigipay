import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-banner-item',
  imports: [NgOptimizedImage],
  templateUrl: './carousel-banner-item.component.html',
  styleUrl: './carousel-banner-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselBannerItemComponent {
  @Input() public src: string = '';
  @Input() public alt: string = '';
  @Input() public title: string = '';
  @Input() public width: string = '';
  @Input() public height: string = '';
  @Input() public link?: string = '';
  @Input() public desc?: string = '';
}

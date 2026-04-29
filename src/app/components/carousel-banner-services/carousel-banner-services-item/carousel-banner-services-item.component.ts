import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'app-carousel-banner-services-item',
	imports: [NgOptimizedImage],
	templateUrl: './carousel-banner-services-item.component.html',
	styleUrl: './carousel-banner-services-item.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselBannrServicesItemComponent {
	@Input() public src: string = '';
	@Input() public alt: string = '';
	@Input() public title: string = '';
	@Input() public width: string = '';
	@Input() public height: string = '';
	@Input() public link?: string = '';
	@Input() public desc?: string = '';
}

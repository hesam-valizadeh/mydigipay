// src/app/components/service-item-carousel/service-item-carousel.component.ts
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CustomSwiperComponent } from '@shared/components/custom-swiper/custom-swiper.component';
import { IServiceItemInterface } from '@core/models/interfaces/services-item.interface';
import { SwiperOptions } from 'swiper/types';

@Component({
	selector: 'app-service-item-carousel',
	standalone: true,
	imports: [CustomSwiperComponent],
	templateUrl: './service-item-carousel.component.html',
	styleUrls: ['./service-item-carousel.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceItemCarouselComponent {
	@Input({ required: true })
	public itemsList: IServiceItemInterface[] = [];

	public SwiperConfig: SwiperOptions = {
		slidesPerView: 5,
		spaceBetween: 10,
		pagination: false,
		navigation: false,
		loop: false,
		breakpoints: {
			300: {
				slidesPerView: 3.2,
				spaceBetween: 8,
				pagination: false,
				navigation: false,
				loop: false,
			},
			500: {
				slidesPerView: 4.8,
				spaceBetween: 8,
				pagination: false,
				navigation: false,
				loop: false,
			},
			700: {
				slidesPerView: 6,
				spaceBetween: 8,
				pagination: false,
				navigation: false,
				loop: false,
			},
			1200: {
				slidesPerView: 6,
				spaceBetween: 15,
				pagination: false,
				navigation: false,
				loop: false,
			},
		},
	};
}

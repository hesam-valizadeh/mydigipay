// src/app/components/service-item-carousel/service-item-carousel.component.ts
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
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
export class ServiceItemCarouselComponent implements OnInit {
	@Input({ required: true })
	public itemsList: IServiceItemInterface[] = [];
	@Input() public customConfig: Partial<SwiperOptions> = {};

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

	public ngOnInit(): void {
		this.SwiperConfig = {
			...this.SwiperConfig,
			...this.customConfig,
			autoplay: {
				delay: 500,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
				stopOnLastSlide: false,
			},
			breakpoints: {
				...this.SwiperConfig.breakpoints,
				...(this.customConfig.breakpoints || {}),
			},
		};
	}
}

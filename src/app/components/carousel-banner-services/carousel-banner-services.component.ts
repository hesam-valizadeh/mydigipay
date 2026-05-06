import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CustomSwiperComponent } from '@shared/components/custom-swiper/custom-swiper.component';
import { SwiperOptions } from 'swiper/types';
import { ListModel } from '@core/models/list-model';
import { ICarouselBannerServices } from './model/carousel-banner-interface';
import { CarouselBannrServicesItemComponent } from './carousel-banner-services-item/carousel-banner-services-item.component';

@Component({
	selector: 'app-carousel-banner-services',
	imports: [CustomSwiperComponent, CarouselBannrServicesItemComponent],
	templateUrl: './carousel-banner-services.component.html',
	styleUrl: './carousel-banner-services.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselBannerServicesComponent {
	public slider?: ListModel<ICarouselBannerServices> = new ListModel<ICarouselBannerServices>([
		{
			id: '1',
			src: 'assets/images/services-banner/01.webp',
			alt: 'sdfsdfsdf',
			width: '275',
			height: '162',
			link: '',
			title: 'slider',
		},
		{
			id: '2',
			src: 'assets/images/services-banner/02.webp',
			alt: 'sdfsdfsdf',
			width: '275',
			height: '162',
			link: '',
			title: 'slider',
		},
		{
			id: '3',
			src: 'assets/images/services-banner/03.webp',
			alt: 'sdfsdfsdf',
			width: '275',
			height: '162',
			link: '',
			title: 'slider',
		},
		{
			id: '4',
			src: 'assets/images/services-banner/04.webp',
			alt: 'sdfsdfsdf',
			width: '275',
			height: '162',
			link: '',
			title: 'slider',
		},
		{
			id: '5',
			src: 'assets/images/services-banner/05.webp',
			alt: 'sdfsdfsdf',
			width: '275',
			height: '162',
			link: '',
			title: 'slider',
		},
	]);
	public SwiperConfig: SwiperOptions = {
		slidesPerView: 4,
		centeredSlides: false,
		grabCursor: true,
		loopPreventsSliding: false,
		autoplay: true,
		spaceBetween: 10,
		loop: true,
		pagination: {
			type: 'bullets',
			el: '',
		},
		breakpoints: {
			300: {
				slidesPerView: 1.3,
				spaceBetween: 25,
			},
			500: {
				slidesPerView: 1.3,
				spaceBetween: 25,
			},
			998: {
				slidesPerView: 4,
				spaceBetween: 10,
			},
		},
	};
}

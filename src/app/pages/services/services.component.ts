import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListModel } from '@core/models/list-model';
import { SwiperOptions } from 'swiper/types';
import { CarouselBannerComponent } from 'src/app/components/carousel-banner/carousel-banner.component';
import { SquareBanner } from 'src/app/components/square-banner/square-banner.component';

@Component({
	selector: 'app-services',
	imports: [CarouselBannerComponent, SquareBanner],
	templateUrl: './services.component.html',
	styleUrl: './services.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {
	public slider?: ListModel<unknown> = new ListModel<unknown>([
		{
			id: 1,
			image: 'assets/images/01.webp',
		},
	]);
	public SwiperConfig: SwiperOptions = {
		slidesPerView: 1,
		spaceBetween: 6,
		centeredSlides: false,
		grabCursor: true,
		loopPreventsSliding: false,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			type: 'bullets',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		injectStyles: [],
		breakpoints: {},
	};
}

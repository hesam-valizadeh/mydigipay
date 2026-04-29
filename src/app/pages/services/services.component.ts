import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListModel } from '@core/models/list-model';
import { SwiperOptions } from 'swiper/types';
import { CarouselBannerComponent } from 'src/app/components/carousel-banner/carousel-banner.component';

@Component({
	selector: 'app-services',
	imports: [CarouselBannerComponent],
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
		slidesPerView: 'auto',
		spaceBetween: 15,
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
		injectStyles: [
			`
         .swiper-pagination-bullet {
        background-color: #C9CBCF !important;
        opacity: 1;
        width: 6px;
        height: 6px;
        border-radius: 30px;
        margin: 0 4px;
    }

    .swiper-pagination-bullet.swiper-pagination-bullet-active {
        width: 14px !important;
        background-color: #fff !important;

    }


`,
		],
		breakpoints: {},
	};
}

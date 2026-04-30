/* eslint-disable @typescript-eslint/no-unsafe-argument */
import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	Input,
	OnDestroy,
	ViewChild,
} from '@angular/core';
import { CustomSwiperComponent } from '@shared/components/custom-swiper/custom-swiper.component';
import { TwoRowSliderItemComponent } from './two-row-slider-item/two-row-slider-item.component';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import {
	ITwoRowSlide,
	ITwoRowSliderConfig,
} from '@core/models/interfaces/two-row-slider.interface';

@Component({
	selector: 'app-two-row-slider',
	imports: [CustomSwiperComponent, TwoRowSliderItemComponent],
	templateUrl: './two-row-slider.component.html',
	styleUrl: './two-row-slider.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TwoRowSliderComponent implements AfterViewInit, OnDestroy {
	@Input() public slides: ITwoRowSlide[] = [];
	@Input() public config: ITwoRowSliderConfig = {};

	@ViewChild('swiperContainer') public swiperContainer!: ElementRef;

	private swiper: Swiper | null = null;

	public ngAfterViewInit(): void {
		this.initSwiper();
	}

	public ngOnDestroy(): void {
		if (this.swiper) {
			this.swiper.destroy(true, true);
		}
	}

	private initSwiper(): void {
		const swiperConfig: SwiperOptions = {
			// eslint-disable-next-line no-magic-numbers
			slidesPerView: this.config.slidesPerView ?? 4,
			// eslint-disable-next-line no-magic-numbers
			spaceBetween: this.config.spaceBetween ?? 20,
			loop: this.config.loop ?? false,
			// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
			autoplay: this.config.autoplayDelay
				? {
						delay: this.config.autoplayDelay,
						disableOnInteraction: false,
					}
				: false,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 12,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
				1024: {
					// eslint-disable-next-line no-magic-numbers
					slidesPerView: this.config.slidesPerView ?? 4,
					spaceBetween: 20,
				},
				1280: {
					// eslint-disable-next-line no-magic-numbers
					slidesPerView: this.config.slidesPerView ?? 5,
					spaceBetween: 20,
				},
			},
		};

		this.swiper = new Swiper(this.swiperContainer.nativeElement, swiperConfig);
	}
}

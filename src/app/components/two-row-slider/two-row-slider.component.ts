import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	Input,
	OnDestroy,
	ViewChild,
} from '@angular/core';
import { TwoRowSliderItemComponent } from './two-row-slider-item/two-row-slider-item.component';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import {
	ITwoRowSlide,
	ITwoRowSliderConfig,
} from '@core/models/interfaces/two-row-slider.interface';
const slidesPerView: number = 4;
const spaceBetween: number = 20;
@Component({
	selector: 'app-two-row-slider',
	imports: [TwoRowSliderItemComponent],
	templateUrl: './two-row-slider.component.html',
	styleUrl: './two-row-slider.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TwoRowSliderComponent implements AfterViewInit, OnDestroy {
	@Input() public slides: ITwoRowSlide[] = [];
	@Input() public config: ITwoRowSliderConfig = {};
	@ViewChild('swiperContainer') public swiperContainer!: ElementRef<HTMLElement>;
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
			slidesPerView: this.config.slidesPerView ?? slidesPerView,
			spaceBetween: this.config.spaceBetween ?? spaceBetween,
			loop: this.config.loop ?? false,
			autoplay:
				this.config.autoplayDelay !== undefined
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
					slidesPerView: this.config.slidesPerView ?? slidesPerView,
					spaceBetween: 20,
				},
				1280: {
					slidesPerView: this.config.slidesPerView ?? slidesPerView + 1,
					spaceBetween: 20,
				},
			},
		};
		this.swiper = new Swiper(this.swiperContainer.nativeElement, swiperConfig);
	}
}

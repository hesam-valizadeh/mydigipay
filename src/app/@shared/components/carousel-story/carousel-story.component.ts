import {
	ChangeDetectorRef,
	Component,
	ChangeDetectionStrategy,
	CUSTOM_ELEMENTS_SCHEMA,
	inject,
} from '@angular/core';
import { CustomSwiperComponent } from '../custom-swiper/custom-swiper.component';
import { CarouselStoryItemComponent } from './carousel-story-item/carousel-story-item.component';
import { ListModel } from '../../../@core/models/list-model';
import { Swiper, SwiperOptions } from 'swiper/types';
import { IStoryCarousel } from './model/carousel-inerface';
import { ProgressWidthPipe } from '@shared/pipes/progress-width.pipe';

const CAROUSEL_PROGRESS_MAX = 100;
const CAROUSEL_AUTOPLAY_DELAY_MS = 3000;

@Component({
	selector: 'app-carousel-story',
	standalone: true,
	imports: [CustomSwiperComponent, CarouselStoryItemComponent, ProgressWidthPipe],
	templateUrl: './carousel-story.component.html',
	styleUrl: './carousel-story.component.scss',
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselStoryComponent {
	public activeIndex = 0;
	public progress = CAROUSEL_PROGRESS_MAX;
	public slider?: ListModel<IStoryCarousel> = new ListModel<IStoryCarousel>([
		{
			id: 1,
			title: 'pic 1',
			class: 'story-background-base',
			style:
				'background-image:linear-gradient(180deg, #7582D9 0%, #4959BF 70.45%, rgba(55, 71, 180, 0.20) 100%), url("assets/images/login/bg-onboarding-mini-apps.svg");',
			src: 'assets/images/login/mini-apps.webp',
		},
		{
			id: 2,
			title: 'pic 2',
			class: 'story-background-base',
			style:
				'background-image: linear-gradient(180deg, #A17DEA 0%, #824DEE 64.42%, rgba(55, 71, 180, 0.20) 100%), url("assets/images/login/bg-onboarding-credit.svg");',
			src: 'assets/images/login/credit.webp',
		},
		{
			id: 3,
			title: 'pic 3',
			class: 'story-background-base',
			style:
				'background-image:linear-gradient(180deg, #4D8DE7 0%, #1752A4 67.79%, rgba(2, 58, 136, 0.20) 100%), url("assets/images/login/bg-onboarding-insurance.svg"); ',
			src: 'assets/images/login/insurance.webp',
		},
		{
			id: 4,
			title: 'pic 3',
			class: 'story-background-base',
			style:
				'background-image: linear-gradient(180deg, #48C283 0%, #2B9C5D 66.35%, rgba(32, 141, 78, 0.20) 100%), url("assets/images/login/bg-onboarding-wealth.svg");',
			src: 'assets/images/login/wealth.webp',
		},
	]);
	public SwiperConfig: SwiperOptions = {
		slidesPerView: 1,
		loop: true,
		effect: 'fade',
		autoplay: {
			delay: CAROUSEL_AUTOPLAY_DELAY_MS,
			disableOnInteraction: false,
		},
		on: {
			autoplayTimeLeft: (swiper, time, progress) => {
				this.onAutoplayProgress(swiper, time, progress);
			},
			slideChange: (swiper) => {
				this.activeIndex = swiper.realIndex;
				this.cdr.detectChanges();
			},
		},
	};

	private readonly cdr = inject(ChangeDetectorRef);

	public onAutoplayProgress(_swiper: Swiper, _time: number, progress: number): void {
		this.progress = CAROUSEL_PROGRESS_MAX * (1 - progress);
		this.cdr.detectChanges();
	}

	public getProgressWidth(index: number): number {
		if (index === this.activeIndex) {
			return this.progress;
		}
		return index < this.activeIndex ? CAROUSEL_PROGRESS_MAX : 0;
	}
}

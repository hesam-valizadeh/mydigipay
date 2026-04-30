import { IServiceItemInterface } from './services-item.interface';

export interface ITwoRowSlide {
	id: number | string;
	rowUp: IServiceItemInterface;
	rowDown: IServiceItemInterface;
}

export interface ITwoRowSliderConfig {
	slidesPerView?: number;
	spaceBetween?: number;
	loop?: boolean;
	autoplayDelay?: number;
}

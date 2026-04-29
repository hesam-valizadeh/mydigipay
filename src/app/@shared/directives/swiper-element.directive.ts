import {
	AfterViewInit,
	Directive,
	ElementRef,
	inject,
	Input,
	NgZone,
	PLATFORM_ID,
} from '@angular/core';
import { AutoplayOptions, SwiperOptions } from 'swiper/types';
import { SwiperContainer } from 'swiper/element';
import { isPlatformBrowser } from '@angular/common';

interface IExtendedSwiperElement extends HTMLElement {
	initialize: () => void;
	swiper: {
		params: SwiperOptions;
		autoplay: {
			start: () => void;
			stop: () => void;
		};
	};
}

@Directive({
	selector: '[appSwiperElement]',
	standalone: true,
})
export class SwiperElementDirective implements AfterViewInit {
	@Input() public config?: SwiperOptions;

	private readonly element = inject(ElementRef<SwiperContainer>);
	private readonly ngZone = inject(NgZone);
	private readonly platformId = inject(PLATFORM_ID);

	private readonly _swiperElement: SwiperContainer = this.element
		.nativeElement as unknown as SwiperContainer;
	public ngAfterViewInit(): void {
		if (!isPlatformBrowser(this.platformId)) {
			return;
		}

		const swiperNode = this._swiperElement as unknown as IExtendedSwiperElement;

		if (typeof swiperNode.initialize !== 'function') {
			return;
		}

		this.initSwiperWithAutoplay(swiperNode);
	}

	private initSwiperWithAutoplay(swiperNode: IExtendedSwiperElement): void {
		const autoplayConfig = this.extractAutoplayConfig();

		if (this.config !== undefined) {
			Object.assign(this._swiperElement, this.config);
		}

		swiperNode.initialize();

		if (autoplayConfig !== undefined) {
			this.activateAutoplay(swiperNode);
		}
	}

	private extractAutoplayConfig(): AutoplayOptions | undefined {
		const currentConfig = this.config;
		if (currentConfig?.autoplay !== undefined && typeof currentConfig.autoplay === 'object') {
			const autoplay = { ...currentConfig.autoplay };
			delete currentConfig.autoplay;
			return autoplay;
		}
		return undefined;
	}

	private activateAutoplay(swiperNode: IExtendedSwiperElement): void {
		this.ngZone.runOutsideAngular(() => {
			const swiperInstance = swiperNode.swiper;

			const startFn = swiperInstance.autoplay.start;
			if (typeof startFn === 'function') {
				startFn.call(swiperInstance.autoplay);
			}
		});
	}
}

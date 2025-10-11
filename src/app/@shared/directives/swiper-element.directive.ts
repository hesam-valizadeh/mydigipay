import {AfterViewInit, Directive, ElementRef, Inject, Input, NgZone, PLATFORM_ID} from '@angular/core';
import {AutoplayOptions, SwiperOptions} from 'swiper/types';
import {SwiperContainer} from 'swiper/element';
import {isPlatformBrowser} from '@angular/common';

@Directive({
  selector: '[appSwiperElement]'
})
export class SwiperElementDirective implements AfterViewInit {
  private readonly _swiperElement: SwiperContainer;

  @Input() config?: SwiperOptions;

  constructor(
    private element: ElementRef<SwiperContainer>,
    @Inject(PLATFORM_ID) private platformId: object,
    private ngZone: NgZone,
  ) {
    this._swiperElement = element.nativeElement;
  }

  ngAfterViewInit(): void {

    let autoplay: AutoplayOptions | boolean = false;

    if (this.config?.autoplay) {
      autoplay = Object.assign({}, this.config.autoplay);
      delete this.config.autoplay;
    }

    if (isPlatformBrowser(this.platformId)) {
      Object.assign(this._swiperElement, this.config);

      this._swiperElement.initialize();
      if (autoplay) {
        this.ngZone.runOutsideAngular(() => {
          this._swiperElement.swiper.params.autoplay = autoplay;
          this._swiperElement.swiper.autoplay.start();
        })
      }
    }
  }
}


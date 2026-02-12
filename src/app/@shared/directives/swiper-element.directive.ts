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

@Directive({
  selector: '[appSwiperElement]',
  standalone: true,
})
export class SwiperElementDirective implements AfterViewInit {
  @Input() public config?: SwiperOptions;

  private readonly element = inject(ElementRef<SwiperContainer>);
  private readonly ngZone = inject(NgZone);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly _swiperElement: SwiperContainer = this.element.nativeElement as SwiperContainer;

  public ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    let autoplay: AutoplayOptions | undefined;

    if (this.config && this.config.autoplay !== undefined && this.config.autoplay !== false) {
      autoplay = { ...(this.config.autoplay as AutoplayOptions) };
      delete this.config.autoplay;
    }

    // اعمال کانفیگ روی المنت
    if (this.config) {
      Object.assign(this._swiperElement, this.config);
    }

    this._swiperElement.initialize();

    if (autoplay !== undefined) {
      this.ngZone.runOutsideAngular(() => {
        const swiperInstance = this._swiperElement.swiper;
        swiperInstance.params.autoplay = autoplay;

        const swiperAutoplay = swiperInstance.autoplay as { start?: () => void } | undefined;
        const canStartAutoplay = typeof swiperAutoplay?.start === 'function';

        if (canStartAutoplay) {
          (swiperAutoplay as { start: () => void }).start();
        }
      });
    }
  }
}

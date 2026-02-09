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
  standalone: true 
})
export class SwiperElementDirective implements AfterViewInit {
  @Input() config?: SwiperOptions;

  private readonly element = inject(ElementRef<SwiperContainer>);
  private readonly ngZone = inject(NgZone);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly _swiperElement: SwiperContainer = this.element.nativeElement as SwiperContainer;
  
      ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    let autoplay: AutoplayOptions | boolean | undefined = false;

    if (this.config?.autoplay) {
      autoplay = { ...(this.config.autoplay as AutoplayOptions) };
      delete this.config.autoplay;
    }

    // اعمال کانفیگ روی المنت
    Object.assign(this._swiperElement, this.config);

    this._swiperElement.initialize();

    if (autoplay) {
      this.ngZone.runOutsideAngular(() => {
        if (this._swiperElement.swiper) {
          this._swiperElement.swiper.params.autoplay = autoplay;
          this._swiperElement.swiper.autoplay?.start();
        }
      });
    }
  }
}
import { NgTemplateOutlet } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ContentChild,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
  ChangeDetectionStrategy,
} from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { Swiper, SwiperOptions } from 'swiper/types';
import { SwiperElementDirective } from '../../directives/swiper-element.directive';

@Component({
  selector: 'app-custom-swiper',
  standalone: true,
  imports: [NgTemplateOutlet, SwiperElementDirective],
  templateUrl: './custom-swiper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CustomSwiperComponent<ItemsType> implements AfterViewInit {
  @Input() public swiperClass = '';
  @Input() public customPagination = false;
  @Input() public startIndex = 0;
  @Input() public swiperDir: 'ltr' | 'rtl' = 'rtl';
  @Input() public slides: ItemsType[] = [];
  @Input({ required: true }) public config: SwiperOptions = {};

  @ViewChild('swiperRef', { static: false })
  public swiperRef!: ElementRef<SwiperContainer>;

  @ContentChild('swiperSlideTemplate')
  public swiperSlideTemplate: TemplateRef<{ item: ItemsType; index: number }> | null = null;

  @Output() public slideChange = new EventEmitter<number>();

  public disabledPrevButton = true;
  public disabledNextButton = true;

  public ngAfterViewInit(): void {
    const swiperEl = this.swiperRef.nativeElement;

    swiperEl.addEventListener('ready', () => {
      const instance = swiperEl.swiper;
      instance.on('slideChange', (swiper: Swiper) => {
        this.slideChange.emit(swiper.activeIndex);
        this.disabledPrevButton = swiper.activeIndex === 0;
        this.disabledNextButton = swiper.activeIndex === this.slides.length - 1;
      });

      if (this.startIndex > 0) {
        instance.slideTo(this.startIndex);
      }
    });
  }

  public slideNext(): void {
    this.swiperRef.nativeElement.swiper.slideNext();
  }

  public slidePrev(): void {
    this.swiperRef.nativeElement.swiper.slidePrev();
  }

  public slideTo(index: number): void {
    this.swiperRef.nativeElement.swiper.slideTo(index);
  }

  public get toggleContainerEndClass(): string {
    const slidesPerView = this.config.slidesPerView;

    if (slidesPerView !== 'auto' && slidesPerView !== undefined) {
      if (this.slides.length <= slidesPerView) {
        return 'swiper-without-container-end';
      }
    }

    return '';
  }
}

import { NgTemplateOutlet } from '@angular/common';
import { AfterViewInit, Component, ContentChild, CUSTOM_ELEMENTS_SCHEMA, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { Swiper, SwiperOptions } from 'swiper/types';
import { SwiperElementDirective } from '../../directives/swiper-element.directive';

@Component({
  selector: 'app-custom-swiper',
  imports: [
    NgTemplateOutlet,
    SwiperElementDirective
  ],
  templateUrl: './custom-swiper.component.html',
  styleUrl: './custom-swiper.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomSwiperComponent<ItemsType> implements AfterViewInit{
  @Input() swiperClass: string = '';
  @Input() customPagination: boolean = false;
  @Input() startIndex: number = 0;
  @Input() swiperDir: 'ltr' | 'rtl' = 'rtl';
  @Input() slides: Array<ItemsType> = [];
  @Input({required: true}) config: SwiperOptions = {};

  @ViewChild('swiperRef', {static: false}) swiperRef!: ElementRef<SwiperContainer>;

  @ContentChild('swiperSlideTemplate') swiperSlideTemplate: TemplateRef<{ item: any, index: number }> | null = null;

  @Output() slideChange = new EventEmitter<number>();
  
  disabledPrevButton: boolean = true;
  disabledNextButton: boolean = true;

  
  ngAfterViewInit(): void {

    this.swiperRef?.nativeElement?.swiper?.on('slideChange', (swiper: Swiper) => {
      this.slideChange.emit(swiper.activeIndex);
      this.disabledPrevButton = swiper.activeIndex === 0;
      this.disabledNextButton = swiper.activeIndex === (this.slides.length - 1);
    })


  }

  slideNext() {
    this.swiperRef?.nativeElement?.swiper?.slideNext()
  }

  slidePrev() {
    this.swiperRef?.nativeElement?.swiper?.slidePrev()
  }

  slideTo(index: number) {
    this.swiperRef?.nativeElement?.swiper?.slideTo(index);
  }
  
  get toggleContainerEndClass() {
    if (this.config.slidesPerView !== 'auto') {
      if (this.slides.length <= this.config.slidesPerView!) {
        return 'swiper-without-container-end';
      } else {
        return '';
      }
    } else {
      return '';
    }
  }

}

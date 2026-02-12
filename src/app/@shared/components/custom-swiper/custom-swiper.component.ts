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
  // قانون ۱: اجبار به OnPush
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CustomSwiperComponent<ItemsType> implements AfterViewInit {
  // قانون ۲: اضافه کردن Accessibility به تمام ورودی‌ها
  @Input() public swiperClass: string = '';
  @Input() public customPagination: boolean = false;
  @Input() public startIndex: number = 0;
  @Input() public swiperDir: 'ltr' | 'rtl' = 'rtl';
  @Input() public slides: ItemsType[] = [];
  @Input({ required: true }) public config: SwiperOptions = {};

  @ViewChild('swiperRef', { static: false }) public swiperRef!: ElementRef<SwiperContainer>;

  @ContentChild('swiperSlideTemplate') public swiperSlideTemplate: TemplateRef<{
    item: ItemsType;
    index: number;
  }> | null = null;

  @Output() public slideChange = new EventEmitter<number>();

  // قانون ۳: خصوصی کردن متغیرهای داخلی
  public disabledPrevButton: boolean = true;
  public disabledNextButton: boolean = true;
  public ngAfterViewInit(): void {
    // اصلاح ارور خط ۵۵:
    // وقتی swiperRef را با "!" تعریف کردی، یعنی nativeElement همیشه هست.
    // همچنین swiper در SwiperContainer همیشه یک آبجکت است (Truthy).
    const swiperInstance = this.swiperRef.nativeElement.swiper;

    // مستقیماً ایونت را ست می‌کنیم چون swiperInstance طبق تایپ‌ها همیشه وجود دارد
    swiperInstance.on('slideChange', (swiper: Swiper): void => {
      this.slideChange.emit(swiper.activeIndex);
      this.disabledPrevButton = swiper.activeIndex === 0;
      this.disabledNextButton = swiper.activeIndex === this.slides.length - 1;
    });
  }

  public slideNext(): void {
    // اصلاح ارور خط ۶۵: حذف "?" اضافی
    // وقتی مطمئنی swiperRef هست، نیازی به زنجیره‌ی اختیاری روی nativeElement نیست.
    this.swiperRef.nativeElement.swiper.slideNext();
  }

  public slidePrev(): void {
    // اصلاح ارور خط ۶۹
    this.swiperRef.nativeElement.swiper.slidePrev();
  }

  public slideTo(index: number): void {
    // اصلاح ارور خط ۷۳
    this.swiperRef.nativeElement.swiper.slideTo(index);
  }

  public get toggleContainerEndClass(): string {
    const slidesPerView = this.config.slidesPerView;

    if (slidesPerView !== 'auto' && slidesPerView !== undefined) {
      // رفع ارور non-null assertion با چک کردن مستقیم
      if (this.slides.length <= slidesPerView) {
        return 'swiper-without-container-end';
      }
    }
    return '';
  }
}

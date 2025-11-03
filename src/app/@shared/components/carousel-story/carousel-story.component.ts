import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  inject,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { CustomSwiperComponent } from '../custom-swiper/custom-swiper.component';
import { CarouselStoryItemComponent } from './carousel-story-item/carousel-story-item.component';
import { ListModel } from '../../../@core/models/list-model';
import { SwiperOptions } from 'swiper/types';
import { StoryCarousel } from './model/carousel-inerface';

@Component({
  selector: 'app-carousel-story',
  standalone: true,
  imports: [CustomSwiperComponent, CarouselStoryItemComponent],
  templateUrl: './carousel-story.component.html',
  styleUrl: './carousel-story.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarouselStoryComponent {
  slider?: ListModel<StoryCarousel> = new ListModel<StoryCarousel>([
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
  activeIndex = 0;
  progress = 100;
  private cdr = inject(ChangeDetectorRef);
  onAutoplayProgress(swiper: any, time: number, progress: number) {
    this.progress = 1 - progress;
    this.cdr.detectChanges();
  }
  trackById = (_: number, item: StoryCarousel) => item.id;

  SwiperConfig: SwiperOptions = {
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    on: {
      autoplayTimeLeft: (swiper, time, progress) => {
        this.onAutoplayProgress(swiper, time, progress);
      },
      slideChange: (swiper) => {
        this.activeIndex = swiper.realIndex ?? 0;
        this.cdr.detectChanges();
      },
    },
  };
}

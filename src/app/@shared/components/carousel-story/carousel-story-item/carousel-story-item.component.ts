import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel-story-item',
  imports: [CommonModule,NgOptimizedImage],
  templateUrl: './carousel-story-item.component.html',
  styleUrl: './carousel-story-item.component.scss',
})
export class CarouselStoryItemComponent implements OnChanges{

  @Input() src: string='';
  @Input() alt?: string;
  @Input() title?: string;
  @Input() description?: string;
  @Input() brand?: string;
  @Input() link?: string;
  @Input() className?: string;
  @Input() styleAttr?: string;
  @Input() isActive = false;

  @ViewChild('figureImg', { static: true }) figureImg!: ElementRef<HTMLImageElement>;

  ngOnChanges(changes: SimpleChanges) {
    // وقتی isActive true میشه، انیمیشن رو ری‌تریگر کن
    if (changes['isActive'] && this.figureImg) {
      if (this.isActive) {
        const el = this.figureImg.nativeElement;
        el.classList.remove('animation');
        // force reflow برای اطمینان از ری‌تریگر شدن
        void el.offsetWidth;
        el.classList.add('animation');
      }
    }
  }
}

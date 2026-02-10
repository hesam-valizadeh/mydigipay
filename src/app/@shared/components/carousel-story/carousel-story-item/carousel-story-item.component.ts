import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, ChangeDetectionStrategy, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel-story-item',
  imports: [CommonModule,NgOptimizedImage],
  templateUrl: './carousel-story-item.component.html',
  styleUrl: './carousel-story-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselStoryItemComponent implements OnChanges{

  @Input() public src: string='';
  @Input() public alt?: string;
  @Input() public title?: string;
  @Input() public description?: string;
  @Input() public brand?: string;
  @Input() public link?: string;
  @Input() public className?: string;
  @Input() public styleAttr?: string;
  @Input() public isActive = false;

  @ViewChild('figureImg', { static: true }) public figureImg!: ElementRef<HTMLImageElement>;

  public ngOnChanges(changes: SimpleChanges): void {
    if ('isActive' in changes && this.isActive) {
      const el = this.figureImg.nativeElement;
      el.classList.remove('animation');
      
      void el.offsetWidth;
      
      el.classList.add('animation');
    }
  }
}

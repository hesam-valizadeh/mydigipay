import { Pipe, PipeTransform } from '@angular/core';

const FULL_PROGRESS_PERCENT = 100;
const ZERO_PROGRESS_PERCENT = 0;

@Pipe({
  name: 'progressWidth',
  standalone: true,
})
export class ProgressWidthPipe implements PipeTransform {
  public transform(index: number, activeIndex: number, currentProgress: number): number {
    if (index === activeIndex) {
      return currentProgress;
    }

    return index < activeIndex ? FULL_PROGRESS_PERCENT : ZERO_PROGRESS_PERCENT;
  }
}

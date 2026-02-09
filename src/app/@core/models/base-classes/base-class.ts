import { Directive } from '@angular/core';
import { labels } from '@core/constants/labels';

@Directive()
export class BaseClass {
  protected readonly labels = labels;
}

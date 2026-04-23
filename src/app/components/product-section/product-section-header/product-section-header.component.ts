import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CountdownTimerComponent } from '@shared/components/countdown-timer/countdown-timer.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-product-section-header',
  imports: [RouterModule, CountdownTimerComponent],
  templateUrl: './product-section-header.component.html',
  styleUrl: './product-section-header.component.scss',
})
export class ProductSectionHeaderComponent {
  @Input({ required: true }) public title!: string;
  @Input() public viewAllLink: string | null = null;
  @Input() public timerEndDate: Date | null = null;
  @Input() public style: string | null = '';
}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-early-settlement',
  imports: [],
  templateUrl: './early-settlement.component.html',
  styleUrl: './early-settlement.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EarlySettlementComponent {
  public trackEffect(): void {}
}

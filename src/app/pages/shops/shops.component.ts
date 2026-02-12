import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-shops',
  imports: [],
  templateUrl: './shops.component.html',
  styleUrl: './shops.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopsComponent {
  public trackEffect(): void {}
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
  selector: 'app-wealth',
  imports: [],
  templateUrl: './wealth.component.html',
  styleUrl: './wealth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WealthComponent {
  public trackEffect(): void {}
}

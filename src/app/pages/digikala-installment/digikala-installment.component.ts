import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-digikala-installment',
  imports: [],
  templateUrl: './digikala-installment.component.html',
  styleUrl: './digikala-installment.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class DigikalaInstallmentComponent {
  public trackEffect(): void {}
}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-loan-product',
  imports: [],
  templateUrl: './loan-product.component.html',
  styleUrl: './loan-product.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoanProductComponent {
  public trackEffect(): void {}
}

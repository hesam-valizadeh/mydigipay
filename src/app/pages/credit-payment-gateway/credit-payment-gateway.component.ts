import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-credit-payment-gateway',
  imports: [],
  templateUrl: './credit-payment-gateway.component.html',
  styleUrl: './credit-payment-gateway.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreditPaymentGatewayComponent {
  public trackEffect(): void {}
}

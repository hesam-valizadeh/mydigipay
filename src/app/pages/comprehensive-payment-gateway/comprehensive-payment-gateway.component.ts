import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-comprehensive-payment-gateway',
  imports: [],
  templateUrl: './comprehensive-payment-gateway.component.html',
  styleUrl: './comprehensive-payment-gateway.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ComprehensivePaymentGatewayComponent {
  public trackEffect(): void {}

}

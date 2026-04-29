import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-merchant-loan',
	imports: [],
	templateUrl: './merchant-loan.component.html',
	styleUrl: './merchant-loan.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MerchantLoanComponent {
	public trackEffect(): void {}
}

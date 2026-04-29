import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-special-financial-services',
	imports: [],
	templateUrl: './special-financial-services.component.html',
	styleUrl: './special-financial-services.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpecialFinancialServicesComponent {
	public trackEffect(): void {}
}

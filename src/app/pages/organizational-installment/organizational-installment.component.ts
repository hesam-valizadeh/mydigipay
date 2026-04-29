import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-organizational-installment',
	imports: [],
	templateUrl: './organizational-installment.component.html',
	styleUrl: './organizational-installment.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrganizationalInstallmentComponent {
	public trackEffect(): void {}
}

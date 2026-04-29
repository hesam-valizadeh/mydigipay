import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-bnpl',
	imports: [],
	templateUrl: './bnpl.component.html',
	styleUrl: './bnpl.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BnplComponent {
	public trackEffect(): void {}
}

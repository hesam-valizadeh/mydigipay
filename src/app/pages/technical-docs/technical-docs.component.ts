import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-technical-docs',
	imports: [],
	templateUrl: './technical-docs.component.html',
	styleUrl: './technical-docs.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnicalDocsComponent {
	public trackEffect(): void {}
}

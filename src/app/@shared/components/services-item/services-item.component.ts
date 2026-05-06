import { ChangeDetectionStrategy, Component, Input, signal, WritableSignal } from '@angular/core';

@Component({
	selector: 'app-services-item',
	imports: [],
	templateUrl: './services-item.component.html',
	styleUrl: './services-item.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesItemComponent {
	public title: WritableSignal<string> = signal<string>('');
	public icon: WritableSignal<string> = signal<string>('icon-traffic-signal-bold');
	public link: WritableSignal<string> = signal<string>('#');
	public colorIcon: WritableSignal<string> = signal<string>(
		'linear-gradient(224deg, #0f53ed 11.43%, #94bfff 92.87%)',
	);

	@Input({ required: true })
	public set titleValue(value: string) {
		this.title.set(value);
	}

	@Input({ required: true })
	public set iconValue(value: string) {
		this.icon.set(value);
	}

	@Input()
	public set linkValue(value: string) {
		this.link.set(value);
	}

	@Input()
	public set colorIconValue(value: string) {
		this.colorIcon.set(value);
	}
}

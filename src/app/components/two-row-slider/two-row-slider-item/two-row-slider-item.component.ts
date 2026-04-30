import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IServiceItemInterface } from '@core/models/interfaces/services-item.interface';
import { ServicesItemComponent } from '@shared/components/services-item/services-item.component';

@Component({
	selector: 'app-two-row-slider-item',
	imports: [ServicesItemComponent],
	templateUrl: './two-row-slider-item.component.html',
	styleUrl: './two-row-slider-item.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TwoRowSliderItemComponent {
	@Input({ required: true }) public rowUp!: IServiceItemInterface;
	@Input({ required: true }) public rowDown!: IServiceItemInterface;
}

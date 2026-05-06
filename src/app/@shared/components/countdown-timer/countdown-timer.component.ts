import {
	ChangeDetectionStrategy,
	Component,
	Input,
	OnDestroy,
	OnInit,
	signal,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';
const MILLISECONDS_PER_SECOND = 1000;
const SECONDS_PER_MINUTE = 60;
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;

@Component({
	selector: 'app-countdown-timer',
	standalone: true,
	templateUrl: './countdown-timer.component.html',
	styleUrls: ['./countdown-timer.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
	@Input({ required: true })
	public endDate!: Date;

	public hours = signal(0);
	public minutes = signal(0);
	public seconds = signal(0);

	private subscription?: Subscription;

	public ngOnInit(): void {
		this.updateTime();
		this.subscription = interval(MILLISECONDS_PER_SECOND).subscribe(() => {
			this.updateTime();
		});
	}

	public ngOnDestroy(): void {
		this.subscription?.unsubscribe();
	}

	private updateTime(): void {
		const now = new Date().getTime();
		const end = new Date(this.endDate).getTime();
		const distance = end - now;

		if (distance <= 0) {
			this.subscription?.unsubscribe();
			this.hours.set(0);
			this.minutes.set(0);
			this.seconds.set(0);
			return;
		}

		this.hours.set(
			Math.floor(
				(distance / (MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE * MINUTES_PER_HOUR)) %
					HOURS_PER_DAY,
			),
		);
		this.minutes.set(
			Math.floor((distance / (MILLISECONDS_PER_SECOND * MINUTES_PER_HOUR)) % MINUTES_PER_HOUR),
		);
		this.seconds.set(Math.floor((distance / MILLISECONDS_PER_SECOND) % MINUTES_PER_HOUR));
	}
}

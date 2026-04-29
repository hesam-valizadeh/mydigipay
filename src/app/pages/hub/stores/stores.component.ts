import { ChangeDetectionStrategy, Component, inject, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-stores',
	imports: [],
	templateUrl: './stores.component.html',
	styleUrl: './stores.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoresComponent implements OnInit, OnDestroy {
	public mode: string | null = null;
	private route = inject(ActivatedRoute);
	private queryParamsSubscription: Subscription | undefined;

	public ngOnInit(): void {
		this.queryParamsSubscription = this.route.queryParams.subscribe(
			(params: Record<string, unknown>) => {
				this.mode = params['mode'] as string;
				if (this.mode === 'online') {
					this.loadOnlineStores();
				}
			},
		);
	}

	public ngOnDestroy(): void {
		this.queryParamsSubscription?.unsubscribe();
	}

	private loadOnlineStores(): void {
		//TODO: Login page
	}
}

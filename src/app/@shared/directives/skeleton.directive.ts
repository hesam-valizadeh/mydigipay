import {
	Directive,
	input,
	ElementRef,
	inject,
	afterNextRender,
	runInInjectionContext,
	Renderer2,
	Injector,
	effect,
} from '@angular/core';

@Directive({
	selector: '[appSkeleton]',
	standalone: true,
	host: {
		'[class.skeleton-loading]': 'isLoading()',
	},
})
export class SkeletonDirective {
	public readonly isLoading = input(false, {
		alias: 'appSkeleton',
		transform: Boolean,
	});

	public readonly background = input<string>('#e2e8f0');
	public readonly highlight = input<string>('#f1f5f9');
	public readonly borderRadius = input<string>('8px');
	public readonly height = input<string | null>(null);
	public readonly width = input<string | null>(null);

	private readonly el = inject(ElementRef);
	private readonly renderer = inject(Renderer2);
	private readonly injector = inject(Injector);

	public constructor() {
		afterNextRender(() => {
			runInInjectionContext(this.injector, () => {
				effect(() => {
					if (this.isLoading()) {
						this.apply();
						this.addShimmer();
					} else {
						this.remove();
					}
				});
			});
		});
	}

	private apply(): void {
		const e = this.el.nativeElement as HTMLElement;

		this.renderer.setStyle(e, 'background-color', this.background());
		this.renderer.setStyle(e, 'border-radius', this.borderRadius());
		this.renderer.setStyle(e, 'position', 'relative');
		this.renderer.setStyle(e, 'overflow', 'hidden');
		this.renderer.setStyle(e, 'color', 'transparent');

		const h = this.height();
		if (h !== null && h !== '') {
			this.renderer.setStyle(e, 'height', h);
			this.renderer.setStyle(e, 'min-height', h);
		}

		const w = this.width();
		if (w !== null && w !== '') {
			this.renderer.setStyle(e, 'width', w);
		}

		Array.from(e.children).forEach((child) => {
			this.renderer.setStyle(child, 'opacity', '0');
		});
	}

	private addShimmer(): void {
		const e = this.el.nativeElement as HTMLElement;

		if (e.querySelector('.shimmer') !== null) return;

		const div = this.renderer.createElement('div') as HTMLElement;
		this.renderer.addClass(div, 'shimmer');
		this.renderer.setStyle(div, 'position', 'absolute');
		this.renderer.setStyle(div, 'top', '0');
		this.renderer.setStyle(div, 'left', '0');
		this.renderer.setStyle(div, 'width', '100%');
		this.renderer.setStyle(div, 'height', '100%');
		this.renderer.setStyle(
			div,
			'background',
			`linear-gradient(90deg, transparent, ${this.highlight()}, transparent)`,
		);
		this.renderer.setStyle(div, 'transform', 'translateX(-100%)');
		this.renderer.setStyle(div, 'animation', 'shimmer 1.8s infinite');

		this.renderer.appendChild(e, div);
	}

	private remove(): void {
		const e = this.el.nativeElement as HTMLElement;

		this.renderer.removeStyle(e, 'background-color');
		this.renderer.removeStyle(e, 'border-radius');
		this.renderer.removeStyle(e, 'position');
		this.renderer.removeStyle(e, 'overflow');
		this.renderer.removeStyle(e, 'color');
		this.renderer.removeStyle(e, 'height');
		this.renderer.removeStyle(e, 'min-height');
		this.renderer.removeStyle(e, 'width');

		Array.from(e.children).forEach((child) => {
			const element = child as HTMLElement;
			if (!element.classList.contains('shimmer')) {
				this.renderer.removeStyle(element, 'opacity');
			}
		});

		const shimmer = e.querySelector('.shimmer');
		if (shimmer !== null) {
			this.renderer.removeChild(e, shimmer);
		}
	}
}

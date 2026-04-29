import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'app-hero-carousel-item',
	imports: [],
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './hero-carousel-item.component.html',
})
export class HeroCarouselItemComponent {
	@Input() public src?: string | undefined | null = '';
	@Input() public alt?: string | undefined = '';
	@Input() public title?: string | undefined = '';
	@Input() public description?: string | undefined = '';
	@Input() public brand?: string | undefined = '';
	@Input() public link?: string | undefined = '';
	@Input() public isActive?: boolean = false;
	@Input() public textBrand?: string = '';
	@Input() public viewBtnText?: string = '';
	@Input() public icon?: string = '';
	@Input() public width = '748';
	@Input() public btn?: boolean = false;
}

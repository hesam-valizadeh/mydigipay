import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselBannerServicesComponent } from './carousel-banner-services.component';

describe('CarouselBannerServicesComponent', () => {
	let component: CarouselBannerServicesComponent;
	let fixture: ComponentFixture<CarouselBannerServicesComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [CarouselBannerServicesComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(CarouselBannerServicesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

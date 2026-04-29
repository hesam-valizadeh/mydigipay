import { HomeComponent } from '../../../src/app/pages/home/home.component';
import { ResponsiveService } from '../../../src/app/@core/services/responsive.service';
import { SearchOverlayService } from '../../../src/app/@core/services/search-overlay-service.service';

describe('HomeComponent - BDD Tests', () => {
	// Mock services
	const mockResponsiveService = {
		isDesktop: () => true,
		isMobile: () => false,
		isTablet: () => false,
	};

	const mockSearchOverlayService = {
		isSearchOpen: () => false,
		openSearch: () => {},
		closeSearch: () => {},
		toggleSearch: () => {},
	};

	let componentInstance: HomeComponent | null = null;

	beforeEach(() => {
		cy.mount(HomeComponent, {
			providers: [
				{
					provide: ResponsiveService,
					useValue: mockResponsiveService,
				},
				{
					provide: SearchOverlayService,
					useValue: mockSearchOverlayService,
				},
			],
		}).then(({ component }) => {
			componentInstance = component;
		});
	});
	it('Scenario: نمایش صحیح صفحه اصلی', () => {
		cy.get('app-home').should('be.visible');

		cy.get('app-hero-carousel').should('exist').and('be.visible');

		cy.get('app-service-card').should('exist').and('be.visible');

		cy.get('app-product-section').should('have.length.at.least', 1);
	});
	it('Scenario: بررسی داده‌های محصولات', () => {
		cy.then(() => {
			expect(componentInstance).to.not.be.null;
		});

		// Then: باید داده‌های محصولات موجود باشد
		cy.then(() => {
			expect(componentInstance?.data).to.exist;
		});

		// And: باید محصولات کلید هوشمند موجود باشد
		cy.then(() => {
			expect(componentInstance?.data.smartSwitches).to.exist;
			expect(componentInstance?.data.smartSwitches.sliderProducts).to.be.an('array');
			expect(componentInstance?.data.smartSwitches.sliderProducts?.length).to.be.greaterThan(0);
		});

		// And: باید محصولات لوازم هوشمند خودرو موجود باشد
		cy.then(() => {
			expect(componentInstance?.data.carSmartAccessories).to.exist;
			expect(componentInstance?.data.carSmartAccessories.sliderProducts).to.be.an('array');
			expect(componentInstance?.data.carSmartAccessories.sliderProducts?.length).to.be.greaterThan(
				0,
			);
		});
	});
});

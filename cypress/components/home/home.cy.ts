/**
 * این فایل تست‌های BDD را بر اساس home.feature پیاده‌سازی می‌کند
 *
 * Feature: صفحه اصلی
 * Scenario: نمایش صحیح صفحه اصلی
 * Scenario: بررسی داده‌های محصولات
 */
import { HomeComponent } from '../../../src/app/pages/home/home.component'
import { ResponsiveService } from '../../../src/app/@core/services/responsive.service'
import { SearchOverlayService } from '../../../src/app/@core/services/search-overlay-service.service'

describe('HomeComponent - BDD Tests', () => {
  // Mock services
  const mockResponsiveService = {
    isDesktop: () => true,
    isMobile: () => false,
    isTablet: () => false,
  }

  const mockSearchOverlayService = {
    isSearchOpen: () => false,
    openSearch: () => {},
    closeSearch: () => {},
    toggleSearch: () => {},
  }

  let componentInstance: HomeComponent | null = null

  beforeEach(() => {
    // Given: صفحه اصلی کامپوننت HomeComponent رندر شده است
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
      componentInstance = component
    })
  })

  /**
   * Scenario: نمایش صحیح صفحه اصلی
   * Given: صفحه اصلی کامپوننت HomeComponent رندر شده است
   * When: صفحه را مشاهده می‌کنم
   * Then: باید بخش کاروسل قهرمان نمایش داده شود
   * And: باید بخش کارت خدمات نمایش داده شود
   * And: باید حداقل یک بخش محصول نمایش داده شود
   */
  it('Scenario: نمایش صحیح صفحه اصلی', () => {
    // When: صفحه را مشاهده می‌کنم
    cy.get('app-home').should('be.visible')

    // Then: باید بخش کاروسل قهرمان نمایش داده شود
    cy.get('app-hero-carousel').should('exist').and('be.visible')

    // And: باید بخش کارت خدمات نمایش داده شود
    cy.get('app-service-card').should('exist').and('be.visible')

    // And: باید حداقل یک بخش محصول نمایش داده شود
    cy.get('app-product-section').should('have.length.at.least', 1)
  })

  /**
   * Scenario: بررسی داده‌های محصولات
   * Given: صفحه اصلی کامپوننت HomeComponent رندر شده است
   * When: داده‌های کامپوننت را بررسی می‌کنم
   * Then: باید داده‌های محصولات موجود باشد
   * And: باید محصولات کلید هوشمند موجود باشد
   * And: باید محصولات لوازم هوشمند خودرو موجود باشد
   */
  it('Scenario: بررسی داده‌های محصولات', () => {
    // When: داده‌های کامپوننت را بررسی می‌کنم
    cy.then(() => {
      expect(componentInstance).to.not.be.null
    })

    // Then: باید داده‌های محصولات موجود باشد
    cy.then(() => {
      expect(componentInstance?.data).to.exist
    })

    // And: باید محصولات کلید هوشمند موجود باشد
    cy.then(() => {
      expect(componentInstance?.data.smartSwitches).to.exist
      expect(componentInstance?.data.smartSwitches.sliderProducts).to.be.an('array')
      expect(componentInstance?.data.smartSwitches.sliderProducts?.length).to.be.greaterThan(0)
    })

    // And: باید محصولات لوازم هوشمند خودرو موجود باشد
    cy.then(() => {
      expect(componentInstance?.data.carSmartAccessories).to.exist
      expect(componentInstance?.data.carSmartAccessories.sliderProducts).to.be.an('array')
      expect(componentInstance?.data.carSmartAccessories.sliderProducts?.length).to.be.greaterThan(0)
    })
  })
})

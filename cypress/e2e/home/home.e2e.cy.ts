/**
 * E2E Tests for HomeComponent
 * 
 * This file contains end-to-end tests for the home page
 * following best practices and naming conventions.
 * 
 * Test Structure:
 * - Page Object Pattern (implicit)
 * - Descriptive test names
 * - Arrange-Act-Assert pattern
 * - Proper data-cy attributes usage
 */

describe('Home Page - E2E Tests', () => {
  const HOME_PAGE_SELECTORS = {
    heroCarousel: 'app-hero-carousel',
    serviceCard: 'app-service-card',
    productSection: 'app-product-section',
    squareBanner: 'app-square-banner',
    downloadApp: '#download-app',
  } as const

  beforeEach(() => {
    // Arrange: Navigate to home page
    cy.visit('/')
    cy.waitForPageLoad()
  })

  describe('Page Load and Initialization', () => {
    it('should load the home page successfully', () => {
      // Assert: Page should be loaded
      cy.url().should('include', '/')
      cy.title().should('contain', 'صفحه اصلی')
      cy.get('app-home').should('exist')
    })

    it('should display the main layout components', () => {
      // Assert: All main components should be visible
      cy.get('app-home').should('be.visible')
      cy.get('header').should('exist')
      cy.get('footer').should('exist')
    })

    it('should have correct meta tags', () => {
      // Assert: Meta tags should be set correctly
      cy.get('head meta[name="description"]').should('exist')
      cy.get('head title').should('contain', 'صفحه اصلی')
    })
  })

  describe('Hero Section', () => {
    it('should display hero carousel', () => {
      // Assert: Hero carousel should be visible
      cy.get(HOME_PAGE_SELECTORS.heroCarousel).should('exist').and('be.visible')
    })

    it('should have accessible hero carousel', () => {
      // Assert: Hero carousel should be accessible
      cy.checkElementAccessibility(HOME_PAGE_SELECTORS.heroCarousel)
    })
  })

  describe('Service Cards Section', () => {
    it('should display service cards', () => {
      // Assert: Service cards should be visible
      cy.get(HOME_PAGE_SELECTORS.serviceCard).should('exist').and('be.visible')
    })

    it('should have accessible service cards', () => {
      // Assert: Service cards should be accessible
      cy.checkElementAccessibility(HOME_PAGE_SELECTORS.serviceCard)
    })
  })

  describe('Product Sections', () => {
    it('should display at least one product section', () => {
      // Assert: At least one product section should be visible
      cy.get(HOME_PAGE_SELECTORS.productSection).should('have.length.at.least', 1)
    })

    it('should display all product sections with correct structure', () => {
      // Assert: All product sections should have proper structure
      cy.get(HOME_PAGE_SELECTORS.productSection).each(($section) => {
        cy.wrap($section).should('be.visible')
        cy.wrap($section).find('[class*="category"]').should('exist')
      })
    })

    it('should have accessible product sections', () => {
      // Assert: Product sections should be accessible
      cy.get(HOME_PAGE_SELECTORS.productSection).each(($section) => {
        cy.wrap($section).checkElementAccessibility($section.selector || '')
      })
    })
  })

  describe('Banner Section', () => {
    it('should display square banner', () => {
      // Assert: Square banner should be visible
      cy.get(HOME_PAGE_SELECTORS.squareBanner).should('exist').and('be.visible')
    })

    it('should display download app section', () => {
      // Assert: Download app section should be visible
      cy.get(HOME_PAGE_SELECTORS.downloadApp).should('exist').and('be.visible')
    })
  })

  describe('Responsive Design', () => {
    it('should be responsive on mobile viewport', () => {
      // Arrange: Set mobile viewport
      cy.viewport(375, 667)

      // Assert: Page should be responsive
      cy.get('app-home').should('be.visible')
      cy.get(HOME_PAGE_SELECTORS.heroCarousel).should('be.visible')
    })

    it('should be responsive on tablet viewport', () => {
      // Arrange: Set tablet viewport
      cy.viewport(768, 1024)

      // Assert: Page should be responsive
      cy.get('app-home').should('be.visible')
      cy.get(HOME_PAGE_SELECTORS.heroCarousel).should('be.visible')
    })

    it('should be responsive on desktop viewport', () => {
      // Arrange: Set desktop viewport
      cy.viewport(1920, 1080)

      // Assert: Page should be responsive
      cy.get('app-home').should('be.visible')
      cy.get(HOME_PAGE_SELECTORS.heroCarousel).should('be.visible')
    })
  })

  describe('Performance', () => {
    it('should load within acceptable time', () => {
      // Arrange: Start performance measurement
      const startTime = Date.now()

      // Act: Visit page
      cy.visit('/')

      // Assert: Page should load within 3 seconds
      cy.then(() => {
        const loadTime = Date.now() - startTime
        expect(loadTime).to.be.lessThan(3000)
      })
    })

    it('should have all images loaded', () => {
      // Assert: All images should be loaded
      cy.get('img').each(($img) => {
        cy.wrap($img).should('have.attr', 'src')
        cy.wrap($img).should('be.visible')
      })
    })
  })

  describe('Navigation', () => {
    it('should navigate to home page from other pages', () => {
      // Arrange: Visit another page first
      cy.visit('/services')

      // Act: Navigate to home
      cy.visit('/')

      // Assert: Should be on home page
      cy.url().should('include', '/')
      cy.get('app-home').should('exist')
    })
  })
})

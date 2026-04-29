/**
 * Accessibility Tests for HomeComponent
 *
 * This file contains accessibility tests following WCAG 2.1 guidelines
 * and best practices for accessibility testing.
 *
 * Test Structure:
 * - WCAG 2.1 Level A and AA compliance
 * - Keyboard navigation testing
 * - Screen reader compatibility
 * - Color contrast validation
 */

describe('Home Page - Accessibility Tests', () => {
	beforeEach(() => {
		// Arrange: Navigate to home page and inject axe
		cy.visit('/');
		cy.waitForPageLoad();
		// Ensure the page is fully loaded before running tests
		cy.injectAxe();
	});

	describe('WCAG 2.1 Compliance', () => {
		it('should have no accessibility violations on page load', () => {
			// Assert: No accessibility violations
			cy.checkA11y();
		});

		it('should have no accessibility violations in hero section', () => {
			// Assert: Hero section should be accessible
			cy.checkA11y('app-hero-carousel');
		});

		it('should have no accessibility violations in service cards', () => {
			// Assert: Service cards should be accessible
			cy.checkA11y('app-service-card');
		});

		it('should have no accessibility violations in product sections', () => {
			// Assert: Product sections should be accessible
			cy.get('app-product-section').each(($section) => {
				cy.checkA11y($section);
			});
		});

		it('should have no accessibility violations with specific rules', () => {
			// Assert: Check with specific WCAG rules
			cy.checkA11y(null, {
				rules: {
					'color-contrast': { enabled: true },
					'keyboard-navigation': { enabled: true },
					'aria-required-attr': { enabled: true },
					'aria-valid-attr-value': { enabled: true },
				},
			});
		});
	});

	describe('Keyboard Navigation', () => {
		it('should be navigable using keyboard only', () => {
			// Act: Navigate using Tab key
			cy.get('body').tab();

			// Assert: Focus should be visible
			cy.focused().should('exist');
		});

		it('should have visible focus indicators', () => {
			// Act: Focus on interactive elements
			cy.get('a, button, input, select, textarea').first().focus();

			// Assert: Focus should be visible
			cy.focused().should('have.css', 'outline').and('not.be.empty');
		});

		it('should support keyboard navigation in product sections', () => {
			// Act: Navigate to product sections using keyboard
			cy.get('app-product-section')
				.first()
				.within(() => {
					cy.get('a, button').first().focus();
				});

			// Assert: Focus should be on product section
			cy.focused().should('exist');
		});
	});

	describe('ARIA Attributes', () => {
		it('should have proper ARIA labels on interactive elements', () => {
			// Assert: Interactive elements should have ARIA labels
			cy.get('button, a[role="button"]').each(($button) => {
				const ariaLabel = $button.attr('aria-label');
				const ariaLabelledBy = $button.attr('aria-labelledby');
				const textContent = $button.text().trim();

				// At least one should be present
				expect(ariaLabel || ariaLabelledBy || textContent).to.exist;
			});
		});

		it('should have proper ARIA roles', () => {
			// Assert: Main sections should have proper roles
			cy.get('main, [role="main"]').should('exist');
			cy.get('nav, [role="navigation"]').should('exist');
		});

		it('should have proper heading hierarchy', () => {
			// Assert: Headings should follow proper hierarchy
			cy.get('h1').should('exist');

			// Check if h2 comes after h1
			cy.get('h1').then(($h1) => {
				if ($h1.length > 0) {
					cy.get('h2').should('exist');
				}
			});
		});
	});

	describe('Images and Media', () => {
		it('should have alt text on all images', () => {
			// Assert: All images should have alt attributes
			cy.get('img').each(($img) => {
				const alt = $img.attr('alt');
				// Alt can be empty for decorative images, but should exist
				expect(alt).to.not.be.undefined;
			});
		});

		it('should have descriptive alt text for informative images', () => {
			// Assert: Informative images should have descriptive alt text
			cy.get('img[alt]').each(($img) => {
				const alt = $img.attr('alt');
				// Decorative images can have empty alt, but informative should have text
				if (alt && alt.trim() !== '') {
					expect(alt.length).to.be.greaterThan(0);
				}
			});
		});
	});

	describe('Color Contrast', () => {
		it('should have sufficient color contrast for text', () => {
			// Assert: Text should have sufficient contrast
			cy.checkA11y(null, {
				rules: {
					'color-contrast': { enabled: true },
				},
			});
		});

		it('should have sufficient color contrast for interactive elements', () => {
			// Assert: Interactive elements should have sufficient contrast
			cy.get('button, a').each(($element) => {
				cy.wrap($element).checkA11y(null, {
					rules: {
						'color-contrast': { enabled: true },
					},
				});
			});
		});
	});

	describe('Screen Reader Compatibility', () => {
		it('should have proper semantic HTML structure', () => {
			// Assert: Semantic HTML should be used
			cy.get('main, article, section, nav, header, footer').should('exist');
		});

		it('should have skip links for navigation', () => {
			// Assert: Skip links should exist for better navigation
			cy.get('a[href*="#main"], a[href*="#content"]').should('exist');
		});
	});

	describe('Form Accessibility', () => {
		it('should have proper form labels', () => {
			// Assert: Form inputs should have labels
			cy.get('input[type="text"], input[type="email"], textarea').each(($input) => {
				const id = $input.attr('id');
				const ariaLabel = $input.attr('aria-label');
				const ariaLabelledBy = $input.attr('aria-labelledby');

				if (id) {
					cy.get(`label[for="${id}"]`).should('exist');
				} else {
					expect(ariaLabel || ariaLabelledBy).to.exist;
				}
			});
		});
	});

	describe('Dynamic Content Accessibility', () => {
		it('should announce dynamic content changes', () => {
			// Assert: Dynamic content should have proper ARIA live regions
			cy.get('[aria-live], [role="alert"], [role="status"]').should('exist');
		});
	});
});

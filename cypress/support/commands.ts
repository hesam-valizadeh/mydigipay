// cypress/support/commands.ts
/// <reference types="cypress" />
/// <reference types="@cypress/code-coverage" />
/// <reference types="cypress-axe" />
// ***********************************************
// Custom commands for E2E testing
// ***********************************************

/**
 * Custom command to check accessibility
 * Usage: cy.checkA11y()
 */
Cypress.Commands.add('checkA11y', (context?: string, options?: any) => {
  cy.injectAxe()
  cy.checkA11y(context, options)
})

/**
 * Custom command to wait for page to be fully loaded
 * Usage: cy.waitForPageLoad()
 */
Cypress.Commands.add('waitForPageLoad', () => {
  cy.get('body').should('be.visible')
  cy.window().its('document.readyState').should('eq', 'complete')
})

/**
 * Custom command to check if element is visible and accessible
 * Usage: cy.checkElementAccessibility('[data-cy="example"]')
 */
Cypress.Commands.add('checkElementAccessibility', (selector: string) => {
  cy.get(selector).should('be.visible')
  cy.get(selector).should('not.have.attr', 'aria-hidden', 'true')
})

declare global {
  namespace Cypress {
    interface Chainable {
      checkA11y(context?: string, options?: any): Chainable<void>
      waitForPageLoad(): Chainable<void>
      checkElementAccessibility(selector: string): Chainable<void>
    }
  }
}
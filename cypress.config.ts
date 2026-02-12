// cypress.config.ts
import { defineConfig } from 'cypress';
import codeCoverageTask from '@cypress/code-coverage/task';

export default defineConfig({
  // ------------------------------
  //        Component Testing
  // ------------------------------
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: 'cypress/components/**/*.cy.ts',
    supportFile: 'cypress/support/component.ts',
    setupNodeEvents(on, config) {
      return config;
    },
  },

  // ------------------------------
  //           E2E Testing
  // ------------------------------
  e2e: {
    baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/e2e/**/*.cy.{js,ts,jsx,tsx}',
    supportFile: 'cypress/support/e2e.ts',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 15000,
    requestTimeout: 15000,
    responseTimeout: 30000,

    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);
      return config;
    },
  },
});

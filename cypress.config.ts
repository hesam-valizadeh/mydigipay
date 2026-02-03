// cypress.config.ts
import { defineConfig } from 'cypress'
import codeCoverageTask from '@cypress/code-coverage/task'

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
    // اگر از cucumber یا step definitions استفاده می‌کنید، این خط را می‌توانید نگه دارید
    // اما معمولاً برای component testing نیازی به stepDefinitions نیست
    // stepDefinitions: 'cypress/components/**/*.steps.ts',

    setupNodeEvents(on, config) {
      // اگر برای component testing هم می‌خواهید code coverage داشته باشید
      // این خط را فعال کنید:
      // codeCoverageTask(on, config)

      return config
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

    // تایم‌اوت‌های منطقی‌تر (اختیاری اما توصیه می‌شود)
    defaultCommandTimeout: 15000,
    requestTimeout: 15000,
    responseTimeout: 30000,

    setupNodeEvents(on, config) {
      // مهم‌ترین خط برای رفع خطای cy.task مربوط به coverage
      codeCoverageTask(on, config)

      // اگر taskهای سفارشی دیگری دارید، اینجا اضافه کنید
      // on('task', {
      //   customTaskName: () => { ... }
      // })

      return config
    },
  },

  // این env معمولاً لازم نیست، چون خود پلاگین مدیریت می‌کند
  // env: {
  //   codeCoverageTasksRegistered: true,
  // },
})
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 70000,
  chromeWebSecurity: false,
  video: false,
  numTestsKeptInMemory: 0,
  reporterOptions: {
    overwrite: false,
    html: false,
    json: true,
    toConsole: true,
  },
  e2e: {
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/**/*.feature',
    baseUrl: 'https://ensekautomationcandidatetest.azurewebsites.net/',
  }
  }
)


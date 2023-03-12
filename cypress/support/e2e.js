// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
// cypress/support/index.js

import './utils/common';

Cypress.on('uncaught:exception', (err, runnable) => false)

before(() => {
  cy.window().then(win => {
    win.sessionStorage.clear()
    win.localStorage.clear()
  })
})

beforeEach(() => {
  cy.viewport(1000, 1200)
  cy.visit("/")
  cy.window().then(win => {
    cy.clearCookies()
  })
})


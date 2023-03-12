import {slowTest} from '../utils/common.js'
import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import 'cypress-iframe'
const testData = require('../../fixtures/testData.json')


Given(
  'New customer clicks sell energy button on the home page',
  () => {
    cy.get('a[href*=Sell]')
      .click()
  }
)

And('Customer redirects to Sell - Candidate Test page', () => {
  cy.title()
    .should('eq', 'Sell - Candidate Test')
    .should('exist')
})
import {slowTest} from '../utils/common.js'
import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import 'cypress-iframe'
const testData = require('../../fixtures/testData.json')


Given(
  'New customer clicks contact Nav on the home page',
  () => {
    cy.get('a[href*=Contact]')
      .click()
  }
)

And('Customer redirects to Contact - Candidate Test page', () => {
  cy.title()
    .should('eq', 'Contact - Candidate Test')
    .should('exist')
})
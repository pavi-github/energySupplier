import {slowTest} from '../utils/common.js'
import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import 'cypress-iframe'
const testData = require('../../fixtures/testData.json')
let numberOfunitsPurchased

Given(
  'New customer clicks buy energy button on the home page',
  () => {
    cy.get('a[href*=Buy]')
      .click()
  }
)

And('Customer redirects to Buy - Candidate Test page', () => {
  cy.title()
    .should('eq', 'Buy - Candidate Test')
    .should('exist')
  cy.get('input[name=Reset]').should('exist').click({force:true})
})

When(/^Customer enters ([^"]*) in Gas section$/, gasNumberOfUnitsRequired => {
   numberOfunitsPurchased = gasNumberOfUnitsRequired
  cy.get('input[id]').eq(1).clear().type(gasNumberOfUnitsRequired)
 
})

And('Customer clicks buy CTA to buy Gas', () => {
  cy.get('input[name=Buy]').eq(0).click()
})



When('Customer redirects to sales confirmed page', () => {
  cy.title()
    .should('eq', 'Sale Confirmed - Candidate Test')
    .should('exist')
  })
Then('Customer validates the remaining gas left in the store',() => {

  const quantityUnitsAvailable = 3000
  const numberOfUnitsLeft = quantityUnitsAvailable-(numberOfunitsPurchased)


  cy.contains('div div p',numberOfUnitsLeft)
  })

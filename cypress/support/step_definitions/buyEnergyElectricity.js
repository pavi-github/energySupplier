import {slowTest} from '../utils/common.js'
import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import 'cypress-iframe'
const testData = require('../../fixtures/testData.json')


When('Customer enters number of units required in Electricity section', () => {
  cy.get('input[id]').eq(4).type(testData.electricityNumberOfUnitsRequired)
})

And('Customer clicks buy CTA to buy Electricity', () => {
  cy.get('input[name=Buy]').eq(1).click()
})



Then('Customer validates the remaining electricity left in the store', ()=> {

  const quantityUnitsAvailable = 4322
  const numberOfUnitsLeft = quantityUnitsAvailable-testData.electricityNumberOfUnitsRequired


  cy.contains('div div p',numberOfUnitsLeft)
  })

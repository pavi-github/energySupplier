import {slowTest} from '../utils/common.js'
import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import 'cypress-iframe'
const testData = require('../../fixtures/testData.json')


When('Customer enters number of units required in Oil section', () => {
  cy.get('input[id]').eq(6).type(testData.oilNumberOfUnitsRequired)
})

And('Customer clicks buy CTA to buy Oil', () => {
  cy.get('input[name=Buy]').eq(2).click()
})



Then('Customer validates the remaining oil left in the store', ()=> {

  const quantityUnitsAvailable = 20
  const numberOfUnitsLeft = quantityUnitsAvailable-testData.oilNumberOfUnitsRequired


  cy.contains('div div p',numberOfUnitsLeft)
  })

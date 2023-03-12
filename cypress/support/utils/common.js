import '@testing-library/cypress/add-commands'

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// This method is to get current date and time to append in the user id - email
  export const currentDateTime=() => {
    let today = new Date()
    return (
      today.getDate() +
      '' +
      (today.getMonth() + 1) +
      '' +
      today.getFullYear() +
      '' +
      today.getHours() +
      '' +
      today.getMinutes() +
      '' +
      today.getSeconds()
    )}


// To get the current month available slot from the Calendar tab to create one off deliveries

export const getAvailableSlot= () => {
  cy.get('[class="react-calendar__month-view__days"]',{ timeout: 10000 }).should('be.visible')
  return cy
    .get('[class="react-calendar__month-view__days"]',{ timeout: 10000 })
    .find('button')
    .not(':disabled')
    .not('[class*="future"]')
    .not('[class*="shop"]')
    .as('slot')
}

//To get the next month available slot from calendar tab to create one off deliveries
export const deliveryCalendarSelection = () => {
  getAvailableSlot()
  cy.get('@slot').then($el => {
    cy.log($el.length, 'length')
    if ($el.length <= 4) {
      cy.get('[class*="next-button"]',{ timeout: 10000 }).should('be.visible')
      cy.get('[class*="next-button"]').click({ force: true })
      getAvailableSlot()
    }
  })
  cy.get('@slot')
  .eq(4)
  .click({ force: true })
}
// Method to click on existing recipe delivery
export const scheduledDeliverySelection = () => {

  cy.get('[class="react-calendar__month-view__days"]',{ timeout: 10000 }).then($ele => {
    if ($ele.find('[class*="future"]').length == 0) {
      cy.get('[class*="next-button"]').should('be.visible');
      cy.get('[class*="next-button"]').click({ force: true });
    }
  });

  cy.get('[class*="future"]')
    .eq(0)
    .click({ force: true });
}

// Method to click on existing R2G order

export const readyToGoOrderSelection=() => {


  cy.get('[class="react-calendar__month-view__days"]', { timeout: 10000 }).then($ele => {
    if ($ele.find('[class*="shop"]').length == 0) {
      cy.log($ele.find('[class*="shop"]'))
      cy.get('[class*="next-button"]',).should('be.visible');
      cy.get('[class*="next-button"]').click({ force: true });
    }
  });
  cy.get('[class*="shop"]',{ timeout: 10000 })
    .not('[class*="future"]',{ timeout: 10000 })
    .not('[class*="past"]',{ timeout: 10000 })
    .as('slot')
    .eq(0)
    .click({ force: true });
}

// Methods to validate R2G orders 


let expectedReadyToGo = []
export const setExpectedReadyToGoText= (str)=> {
  expectedReadyToGo.push(str)
}
export const getExpectedReadyToGoText=(arrayIndex) =>{
  return expectedReadyToGo[arrayIndex]
}

// Methods to validate recipe orders

let expectedRecipeText=[]
export const setExpectedRecipeText=(str) => {
  expectedRecipeText.push(str)
}
export const  getExpectedRecipeText=(arrayIndex) =>{
  cy.log(expectedRecipeText[arrayIndex])
  return expectedRecipeText[arrayIndex]
}

export const clearExpectedRecipeText=() =>{
  expectedRecipeText=[]
}


//Method to enter username and password during sign in
export const login=(email, password) => {
  cy.get('input[name=email]').type(email)
  cy.get('input[name=password]').type(password)
  cy.get('button[type*=submit]').click()
  cy.title().should('eq', 'Your orders | Mindful Chef')
}

export const slowTest=() => {
  defaultCommandTimeout : 200
}

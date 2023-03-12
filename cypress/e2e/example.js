context('Homepage', () => {
  it('should have a CTA button', () => {
    cy.visit('/')

    cy.get('[data-testid="homepage-hero-cta"]').as('hero-cta')
    cy.get('@hero-cta').should('contain', 'CHOOSE YOUR RECIPES')
  })
})

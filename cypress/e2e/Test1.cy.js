require('cypress-xpath');

describe('template spec', () => {
  it('passes', () => {
    cy.visit('www.google.com')
    cy.get('[jsname="yZiJbe""]').type('322')
    
    
  })
})
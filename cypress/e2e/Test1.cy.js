require('cypress-xpath');

describe('template spec', () => {
  it('passes', () => {
    cy.visit('www.google.com')
    for(let i = 0 ; i<10 ; i++){
      cy.get('[jsname="yZiJbe"]').type('f8aba6')
      cy.get('[class="gNO89b"]').eq(0).click()
      cy.visit('www.google.com')
    }

   
    
    
  })
})
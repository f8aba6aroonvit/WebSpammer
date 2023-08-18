require('cypress-xpath');

describe('template spec', () => {
  it('passes', () => {
    cy.visit('www.youtube.com')
    cy.get('[id="search-input"]').type('322')
    cy.xpath('//*[@id="search-icon-legacy"]').click()
    
  })
})
require('cypress-xpath');

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.xpath('//*[@id="navbar"]/ul[1]/li[3]/a').click()
  })
})
context('Logging into cypress as a volunteer', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })
  it('should be on the page', () => {
    cy.contains('Animals').should('exist')
  })
})

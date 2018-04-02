describe('Homepage Tests', function () {
  it('Opens, clicks, asserts', function () {
    cy.visit('http://whats-for-dinner.surge.sh/')
    cy.contains('Search Recipes').click()
    cy.url()
      .should('include', '/recipes')

    cy.contains('Log In').click()
    cy.url()
      .should('include', '/login')
  })
})

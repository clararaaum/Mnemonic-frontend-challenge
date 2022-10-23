describe('simple test', () => {

  //delete localstorage before each test
  beforeEach(() => {
    // cy.clearLocalStorageSnapshot();
    cy.clearLocalStorage()
    cy.visit('http://localhost:3000');
  });

  it('passes', () => {
    cy.visit('localhost:3000')
  }),


  it('check that changing visibility works', () => {
    cy.get('[data-cy=height]').should('not.exist')
    cy.get('[data-cy=weight]').should('not.exist')

    cy.wait(1000)

    cy.get('[data-cy=visibleButton]').click()

    cy.wait(1000)

    cy.get('[data-cy=height]').should('exist')
    cy.get('[data-cy=weight]').should('exist')
  })
})
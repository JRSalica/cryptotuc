describe('General app tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('It should change the theme by clicking the switch', () => {
    cy.get('nav').should('have.class', 'navbar-dark');
    cy.get('[data-testid="theme-switch"]').click();
    cy.get('nav').should('have.class', 'navbar-light');
  });
});

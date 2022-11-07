describe('Home tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('It should render the component and find a text description', () => {
    cy.get('h3')
      .should('have.text', 'Precision y calidad para tus operaciones.');
  });
});

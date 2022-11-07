describe('Chart tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('Grafico').click();
  });

  it('It should render the component and find a text description', () => {
    cy.get('h2')
      .should('have.text', 'Grafico de Precios');
  });

  it('It should render the component, change the selected coin and expect the graphic to re-render', () => {
    cy.get('select').select('DOGE');
    cy.contains('DOGE');
  });
});

describe('Quoter tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('Cotizador').click();
  });

  it('It should render the component and find a text description', () => {
    cy.get('h2')
      .should('have.text', 'Cotizador');
  });

  it('It should render the component, fill the input with a value and find data with the text input value', () => {
    cy.wait(2000);
    cy.get('input').first().type('Doge');
    cy.contains('Dogecoin');
  });
});

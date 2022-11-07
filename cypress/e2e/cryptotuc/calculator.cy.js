describe('Calculator tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('It should render the component and find a text description', () => {
    cy.contains('Calculadora').click();
    cy.get('h2')
      .should('have.text', 'Calculadora');
  });

  it('It should render the component, fill the input with a value and find data with the text input value', () => {
    cy.contains('Calculadora').click();
    cy.get('select').first().select('USD');
    cy.get('select').last().select('BTC');
    cy.get('input').first().clear();
    cy.get('input').first().type('20000');
    cy.contains('Calcular').click();
    cy.get('input').last().invoke('val').then(Number)
      .should('be.gt', 0);
    // cy.contains('Dogecoin');
  });
});

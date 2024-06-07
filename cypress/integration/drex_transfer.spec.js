describe('Teste de Transferências Interbancárias via Drex', () => {
    it('Realizar uma transferência bem-sucedida', () => {
      cy.visit('https://api.drex.transfer'); // Exemplo de URL, ajuste conforme necessário
  
      cy.get('#from_account').type('12345');
      cy.get('#to_account').type('67890');
      cy.get('#amount').type('100.00');
      cy.get('form').submit();
  
      
      cy.contains('Transferência realizada com sucesso').should('be.visible');
    });
  });
  
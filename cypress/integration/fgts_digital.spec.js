describe('Automação do Processo de Gerenciamento do FGTS Digital', () => {
    it('Acessar a página do FGTS Digital e verificar elementos', () => {
      cy.visit('https://blogdoagi.com.br/fgts-digital'); // Exemplo de URL, ajuste conforme necessário
  
      cy.contains('FGTS Digital').should('be.visible');
      cy.get('input[name="cpf"]').type('12345678900');
      cy.get('button[type="submit"]').click();
    });
  });
  
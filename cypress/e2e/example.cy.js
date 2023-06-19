describe('Przykładowy test Cypress', () => {
    it('Logowanie na stronie Sauce Demo', () => {

      cy.visit('https://www.saucedemo.com/');

      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');

      cy.get('#login-button').click();
      cy.url().should('include', '/inventory.html');
      cy.get('.title').should('have.text', 'Products');
    });
  });
  
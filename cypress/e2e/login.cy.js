describe('Przykładowy test Cypress', () => {
  it('Logowanie na stronie Sauce Demo', () => {
    cy.visit('/', { retryOnStatusCodeFailure: true, retryOnNetworkFailure: true, retry: 2 });
    cy.get('#signin2').click();
    cy.get('#sign-username').type(Cypress.env('user_name')) //metody do randomowego tworzenia usera
    cy.get('#sign-password').click().type(Cypress.env('password')) //metoda do tworzenia hasla
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
  });
});

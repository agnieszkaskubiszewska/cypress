describe("Przykładowy test Cypress", () => {
  it("Logowanie na stronie sklepu", () => {

    cy.visit("/", {
      retryOnStatusCodeFailure: true,
      retryOnNetworkFailure: true,
      retry: 2,
    });
    cy.get("#login2").click();
    cy.get("#loginusername").type(Cypress.env("user"));
    cy.get("#loginpassword").click().type(Cypress.env("password"), {log:false});
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();

    cy.on("window:alert", (text) => {
      expect(text).to.eql('Sign up successful.');
    });
  });
});

describe("Logowanie do sklepu", () => {
  beforeEach(() => {
    cy.visit("/", {
      retryOnStatusCodeFailure: true,
      retryOnNetworkFailure: true,
      retry: 2,
    });
  });

  it("Wprowadzenie danych do logowania", () => {
    const user = Cypress.env("LOGIN") || Cypress.env("user");
    const password = Cypress.env("PASSWORD") || Cypress.env("password");

    cy.get("#login2").click();
    cy.get("#loginusername").type(user, { delay: 10 });
    cy.get("#loginpassword").click().type(password, { log: false });
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();

    cy.on("window:alert", (text) => {
      expect(text).to.eql('Sign up successful.');
    });
  });
});

import faker from "faker";

describe("Przykładowy test Cypress", () => {
  it("Logowanie na stronie Sauce Demo", () => {
    const randomUsername = faker.internet.userName();
    cy.visit("/", {
      retryOnStatusCodeFailure: true,
      retryOnNetworkFailure: true,
      retry: 2,
    });
    cy.get("#signin2").click();
    cy.get("#sign-username").type(randomUsername);
    cy.get("#sign-password").click().type(Cypress.env("password"), {log:false});
    cy.get(
      "#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
    ).click();

    cy.on("window:alert", (text) => {
      expect(text).to.eql('Sign up successful.');
    });
  });
});

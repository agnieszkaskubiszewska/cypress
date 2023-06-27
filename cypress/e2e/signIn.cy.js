import faker from "faker";

import SignIn from "../pageObjects/signInPage";


describe("Przykładowy test Cypress", () => {
  const signIn = new SignIn();

  it("Zakladanie konta na stronie sklepu", () => {
    const randomUsername = faker.internet.userName();
    cy.visit("/", {
      retryOnStatusCodeFailure: true,
      retryOnNetworkFailure: true,
      retry: 2,
    });

    signIn.signInButton().click()
    signIn.email().type(randomUsername);
    signIn.password().click().type(Cypress.env("password"), {log:false});
    signIn.signInModalBtn().click()

    cy.on("window:alert", (text) => {
      expect(text).to.eql('Sign up successful.');
    });
  });
});

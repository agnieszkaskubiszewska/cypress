import LogIn from '../pageObjects/logInPage';

describe("Logowanie do sklepu", () => {
  const logIn = new LogIn();

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

    logIn.logInBtn().click();
    logIn.email().type(user, { delay: 50 });
    logIn.password().click().type(password, { log: false });
    logIn.logInModalBtn().click();

    cy.on("window:alert", (text) => {
      expect(text).to.eql('Sign up successful.');
    });
  });
});

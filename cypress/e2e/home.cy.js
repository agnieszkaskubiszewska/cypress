import HomePage from "../pageObjects/homePage";
import LogIn from "../pageObjects/logInPage";

describe("Logowanie do sklepu", () => {
  const homePage = new HomePage();
  const logIn = new LogIn();
  const userName = Cypress.env("user");

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
      expect(text).to.eql("Sign up successful.");
    });
  });

  it("Zawartosc strony nie jest pusta", () => {
    homePage.pageContent();
  });

  it("Wywietlanie karuzeli", () => {
    homePage.checkCarousel();
  });

  it("Wywietlanie kategorii na stronie", () => {
    homePage.checkMenuItemt();
  });

  it("Klikanie wybranych kategorii", () => {
    homePage.clickOnCategory("notebook");
    homePage.clickOnCategory("monitor");
    homePage.clickOnCategory("phone");
  });
});

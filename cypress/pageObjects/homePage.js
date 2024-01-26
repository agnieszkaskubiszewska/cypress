class HomePage {
  verifyLoggedInUser(expectedUsername) {
    cy.get("#nameofuser").should("have.text", expectedUsername);
  }

  clickListItemByText(text) {
    cy.get(".list-group-item").contains(text).click();
  }

  checkCarousel() {
    const carousel = cy.get(".carousel-item").should("be.visible");
  }

  checkMenuItemt(text) {
    cy.get(".navbar-example").should("not.be.empty");
  }

  clickOnCategory(category) {
    switch (category) {
      case "notebook":
        cy.get("[onclick=\"byCat('notebook')\"]").click();
        break;
      case "monitor":
        cy.get("[onclick=\"byCat('monitor')\"]").click();
        break;
      case "phone":
        cy.get("[onclick=\"byCat('phone')\"]").click();
        break;
      default:
        throw new Error("Nieznana kategoria: " + category);
    }
  }
  pageContent() {
    cy.get(".tbodyid").should("not.be.empty");
  }
}

export default HomePage;

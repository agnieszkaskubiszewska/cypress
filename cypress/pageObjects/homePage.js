class HomePage {

    verifyLoggedInUser(expectedUsername) {
        cy.get("#nameofuser").should("have.text", expectedUsername);
      }

      clickListItemByText(text) {
        cy.get('.list-group-item').contains(text).click();
      }

      checkCarouselItemsActive() {
        cy.get('.carousel-item').should(($items) => {
          expect($items.some('.active')).to.be.true;
        });
      }

      clickMenuItemByText(text) {
        cy.get('.navbar-example').should('not.be.empty').contains(text).click();
      }
     pageContent(){
        cy.get('.tbodyid').should('not.be.empty')
     }
     bottomSection(){

     }
}
class LogIn {
  
    email() {
      return cy.wait(600).get('#loginusername');
    }
  
    password() {
      return cy.get('#loginpassword');
    }
  
    logInBtn() {
      return  cy.get('#login2');
    }

    logInModalBtn(){
        return cy.get('.btn.btn-primary').contains('Log in')
    }
  }
  
  export default LogIn;
  
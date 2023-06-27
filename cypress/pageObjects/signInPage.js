class SignIn {
    email() {
      return cy.wait(600).get('#sign-username');
    }
  
    password() {
      return cy.get('#sign-password');
    }
  
    signInButton() {
      return  cy.get('#signin2');
    }

    signInModalBtn(){
        return cy.get('.btn.btn-primary').contains('Sign up')
    }
  }
  
  export default SignIn;
  
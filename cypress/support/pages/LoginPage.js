class LoginPage {

    constructor() {
        this.linkNotYetCustomer = '#newCustomerLink';
        this.fieldEmail = '#email';
        this.fieldPassword = '#password';
        this.loginButton = '#loginButton';
        this.successfulNewUserSignUpMessage = '.mat-simple-snack-bar-content:contains("Registration completed successfully. You can now log in.")';
        this.loginErrorMessage = 'div.error.ng-star-inserted';
    }

    visit() {
        cy.log('Open login page');
        cy.visit('/#/login');
    }

    getLinkNotYetCustomer() {
        return cy.get(this.linkNotYetCustomer);
    }

    getLoginErrorMessage() {
        return cy.get(this.loginErrorMessage);
    }

    getFieldEmail() {
        return cy.get(this.fieldEmail);
    }

    getFieldPassword() {
        return cy.get(this.fieldPassword);
    }

    getSuccessfulNewUserSignUpMessage() {
        return cy.get(this.successfulNewUserSignUpMessage);
    }

    getLoginButton() {
        return cy.get(this.loginButton);
    }

    clickOnLoginButton() {
        cy.log(`Clicking on login button`);
        return this.getLoginButton().click();
    }

    typeIntoEmailField(email) {
        cy.log(`Typing ${email} into email field`);
        return this.getFieldEmail().type(email);
    }

    typeIntoPasswordField(password) {
        cy.log(`Typing ${password} into password field`);
        return this.getFieldPassword().type(password);
    }

    clickLinkNotYetCustomer() {
        cy.log('Click on Link Not Yet a Customer');
        return this.getLinkNotYetCustomer().click();
    }

    checkIfSuccessfulNewUserSignUpMessageAppeared() {
        cy.log('Checking if successful sign up message appeared');
        return this.getSuccessfulNewUserSignUpMessage().should('be.visible');
    }

    checkIfLoginErrorMessageAppeared() {
        cy.log('Checking if login Error Message appeared');
        return this.getLoginErrorMessage().should('contain.text', 'Invalid email or password.');
    }

}

export default new LoginPage();
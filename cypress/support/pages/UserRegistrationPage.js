class UserRegistrationPage {

    constructor() {
        this.fieldEmail = '#emailControl';
        this.fieldPassword = '#passwordControl';
        this.fieldConfirmPassword = '#repeatPasswordControl';
        this.selectorSecurityQuestion = '#mat-select-2';
        this.securityQuestionAnswer = '#mat-option-5';
        this.fieldSecurityQuestionAnswer = '#securityAnswerControl';
        this.buttonRegister = '#registerButton';
        this.userRegistrationErrorMessage = 'div.error';
    }

    visit() {
        cy.log('Open login page');
        cy.visit('/#/register');
    }

    getFieldEmail() {
        return cy.get(this.fieldEmail);
    }

    getUserRegistrationErrorMessage() {
        return cy.get(this.userRegistrationErrorMessage);
    }

    getFieldPassword() {
        return cy.get(this.fieldPassword);
    }

    getFieldConfirmPassword() {
        return cy.get(this.fieldConfirmPassword);
    }

    getButtonRegister() {
        return cy.get(this.buttonRegister);
    }

    getSecurityQuestionAnswer() {
        return cy.get(this.securityQuestionAnswer);
    }

    getFieldSecurityQuestionAnswer() {
        return cy.get(this.fieldSecurityQuestionAnswer);
    }

    getSelectorSecurityQuestion() {
        return cy.get(this.selectorSecurityQuestion);
    }

    clickButtonRegister() {
        cy.log(`Clicking on Button Register`);
        return this.getButtonRegister().click()
    }

    typeIntoSecurityQuestionAnswerField(answer) {
        cy.log(`Typing ${answer} into Security Question Answer field`);
        return this.getFieldSecurityQuestionAnswer().type(answer);
    }

    clickSecuritySelectorQuestion() {
        cy.log(`Clicking on Security Selector Question`);
        return this.getSelectorSecurityQuestion().click()
    }

    checkingUserRegistrationErrorMessage() {
        cy.log(`Checking User Registration Error Message`);
        return this.getUserRegistrationErrorMessage().should('contain.text', 'Email must be unique');
    }

    clickSecurityQuestionAnswer() {
        cy.log(`Clicking on Security Question Answer`);
        return this.getSecurityQuestionAnswer().click()
    }

    typeIntoFieldEmail(email) {
        cy.log(`Typing ${email} into email field`);
        return this.getFieldEmail().type(email);
    }

    typeIntoFieldPassword(password) {
        cy.log(`Typing ${password} into password field`);
        return this.getFieldPassword().type(password);
    }

    typeIntoFieldConfirmPassword(password) {
        cy.log(`Typing ${password} into confirm password field`);
        return this.getFieldConfirmPassword().type(password);
    }

}

export default new UserRegistrationPage();
class LandingPage {

    constructor() {
        this.buttonCloseWelcomeBanner = 'button[aria-label="Close Welcome Banner"]';
        this.buttonAccount = '#navbarAccount';
        this.buttonLogin = '#navbarLoginButton';
    }

    visit() {
        cy.log('Open Landing page');
        cy.visit('/');
    }

    getButtonCloseWelcomeBanner() {
        return cy.get(this.buttonCloseWelcomeBanner);
    }

    getButtonAccount() {
        return cy.get(this.buttonAccount);
    }

    getButtonLogin() {
        return cy.get(this.buttonLogin);
    }

    clickButtonCloseWelcomeBanner() {
        cy.log('Click on Close Welcome Banner button');
        return this.getButtonCloseWelcomeBanner().click();
    }

    clickButtonAccount() {
        cy.log('Click on Account button');
        return this.getButtonAccount().click();
    }

    clickButtonLogin() {
        cy.log('Click on Login button');
        return this.getButtonLogin().click();
    }

}

export default new LandingPage();
class BasketPage {

    constructor() {
        this.buttonCheckout = '#checkoutButton';
    }

    visit() {
        cy.log('Open Basket Page');
        cy.visit('/#/basket');
    }

    getButtonCheckout() {
        return cy.get(this.buttonCheckout);
    }

    clickOnCheckoutButton(){
        return this.getButtonCheckout().click();
    }

}

export default new BasketPage();
class CheckoutPage {

    constructor() {
        this.totalPrice = 'div#price';
    }

    visit() {
        cy.log('Open Basket Page');
        cy.visit('#/address/select');
    }

    getButtonCheckout() {
        return cy.get(this.buttonCheckout);
    }

    clickOnCheckoutButton(){
        return this.getButtonCheckout().click();
    }


}

export default new CheckoutPage();
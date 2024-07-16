class BasketPage {

    constructor() {
        this.totalPrice = 'div#price';
        this.buttonCheckout = '#checkoutButton';
    }

    visit() {
        cy.log('Open Basket Page');
        cy.visit('/#/basket');
    }

    getTotalPrice() {
        cy.intercept('https://juice-shop-sanitarskyi.herokuapp.com/rest/basket/**').as('basketResponse');
        cy.wait('@basketResponse',{timeout:10000});
        return cy.get(this.totalPrice);
    }

    getButtonCheckout() {
        return cy.get(this.buttonCheckout);
    }

    clickOnCheckoutButton(){
        return this.getButtonCheckout().click();
    }

    checkIfTotalPriceGreaterThanZero() {
        cy.log('check If Total Price Greater Than Zero');


        return this.getTotalPrice().should('exist')
            .invoke('text')
            .then((text) => {
                // Log the raw text to the console
                cy.log(`Raw price text: ${text}`);

                // Extract and log the numerical value from the text
                const priceMatch = text.match(/[0-9.]+/);
                if (priceMatch) {
                    const price = parseFloat(priceMatch[0]);
                    cy.log(`Parsed price: ${price}`);

                    // Check if the price is greater than 0
                    expect(price).to.be.greaterThan(0);
                } else {
                    // If no price found in the text, log an error
                    throw new Error(`Unable to parse price from text: ${text}`);
                }
            });
    }

}

export default new BasketPage();
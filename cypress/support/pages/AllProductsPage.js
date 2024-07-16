class AllProductsPage {

    constructor() {
        this.buttonBasket = 'button[routerlink="/basket"]';
        this.buttonAddToBasket = 'button[aria-label="Add to Basket"].btn-basket';
    }

    visit() {
        cy.log('Open All Products Page');
        cy.visit('/#/search');
    }

    getButtonBasket() {
        return cy.get(this.buttonBasket);
    }

    getButtonAddToBasket() {
        return cy.get(this.buttonAddToBasket);
    }

    checkIfBasketAppeared() {
        return this.getButtonBasket().should('have.attr', 'aria-label', 'Show the shopping cart')
            .should('have.class', 'buttons')
            .contains('Your Basket')
            .should('be.visible');
    }

    clickOnBasket() {
        cy.log('Click on Basket button');
        return this.getButtonBasket().click();
    }

    clickOnFirstAddToBasketButtons(quantity) {
        cy.log('Click on add to basket buttons');
        return this.getButtonAddToBasket().should('have.length.at.least', quantity) // Ensure there are at least 3 buttons
            .each(($button, index) => {
                if (index < quantity) {
                    cy.wrap($button).click();
                }
            });
    }

}

export default new AllProductsPage();
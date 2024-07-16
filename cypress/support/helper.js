const dayjs = require("dayjs");

class Helper {
    static emailModificationByAddingDate(email) {
        const registrationEmail = email.split('@');
        const formattedDateTime = dayjs().format('YYYYMMDDHHmmss');
        return registrationEmail[0] + formattedDateTime + '@' + registrationEmail[1];
    }

    static addToBasketByName(productName) {
        // Find and click the "Add to Basket" button for the specified product
        cy.get('mat-card').contains('.item-name', productName)
            .parents('mat-card')
            .find('button[aria-label="Add to Basket"]')
            .click();

        // Wait for the snackbar popup to appear
        cy.get('span.mat-simple-snack-bar-content', {timeout: 10000}).should('be.visible')
            .then((popup) => {
                const popupText = popup.text();
                if (popupText.includes('Placed')) {
                    cy.log(popupText);
                } else if (popupText.includes('We are out of stock')) {
                    cy.log('We are out of stock! Sorry for the inconvenience.');
                }
            });
    }
}

module.exports = Helper;

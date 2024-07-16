class AddressAndPaymentAddingPages {

    constructor() {
        this.buttonAddNewAddress = 'button[aria-label="Add a new address"]';
        this.fieldCountry = '#mat-input-9';
        this.fieldName = '#mat-input-10';
        this.fieldMobilePhone = '#mat-input-11';
        this.fieldZipCode = '#mat-input-12';
        this.fieldAddress = '#address';
        this.fieldCity = '#mat-input-14';
        this.buttonSubmit = '#submitButton';
        this.checkboxAddedAddress = '#mat-radio-40';
        this.buttonProceedToPayment = 'button[aria-label="Proceed to payment selection"]';
        this.deliveryMethodCheckbox = '#mat-radio-41';
        this.buttonProceedToDelivery = 'button[aria-label="Proceed to delivery method selection"]';
        this.linkAddNewCard = '#mat-expansion-panel-header-0';
        this.fieldNameAddNewCard = '#mat-input-16';
        this.fieldCardNumber = '#mat-input-17';
        this.dropdownMonth = '#mat-input-18';
        this.dropdownYear = '#mat-input-19';
        this.radioAddedCard = '#mat-radio-44';
        this.buttonProceedToReview = 'button[aria-label="Proceed to review"]';
        this.buttonCheckout = '#checkoutButton';
        this.confirmationMessageForSuccessfulPurchase = 'h1.confirmation:contains("Thank you for your purchase!")';
        this.fieldCityError = 'mat-error';
    }

    visit() {
        cy.log('Open Address Page');
        cy.visit('/#/address/');
    }

    getButtonAddNewAddress() {
        return cy.get(this.buttonAddNewAddress);
    }

    getConfirmationMessageForSuccessfulPurchase() {
        return cy.get(this.confirmationMessageForSuccessfulPurchase);
    }

    getButtonCheckout() {
        return cy.get(this.buttonCheckout);
    }

    getFieldCityError() {
        return cy.get(this.fieldCityError);
    }

    getButtonProceedToReview() {
        return cy.get(this.buttonProceedToReview);
    }

    getRadioAddedCard() {
        return cy.get(this.radioAddedCard);
    }

    getDropdownMonth() {
        return cy.get(this.dropdownMonth);
    }

    getDropdownYear() {
        return cy.get(this.dropdownYear);
    }

    getFieldCardNumber() {
        return cy.get(this.fieldCardNumber);
    }

    getFieldNameAddNewCard() {
        return cy.get(this.fieldNameAddNewCard);
    }

    getLinkAddNewCard() {
        return cy.get(this.linkAddNewCard);
    }

    getFieldCountry() {
        return cy.get(this.fieldCountry);
    }

    getFieldName() {
        return cy.get(this.fieldName);
    }

    getFieldMobilePhone() {
        return cy.get(this.fieldMobilePhone);
    }

    getFieldZipCode() {
        return cy.get(this.fieldZipCode);
    }

    getFieldAddress() {
        return cy.get(this.fieldAddress);
    }

    getFieldCity() {
        return cy.get(this.fieldCity);
    }

    getButtonSubmit() {
        return cy.get(this.buttonSubmit);
    }

    getCheckboxAddedAddress() {
        return cy.get(this.checkboxAddedAddress);
    }

    getButtonProceedToPayment() {
        return cy.get(this.buttonProceedToPayment);
    }

    getButtonProceedToDelivery() {
        return cy.get(this.buttonProceedToDelivery);
    }

    getCheckboxDeliveryMethod() {
        return cy.get(this.deliveryMethodCheckbox);
    }

    clickOnButtonAddNewAddress() {
        cy.log('Click on Add New Address Button');
        return this.getButtonAddNewAddress().click();
    }

    checkingForConfirmationMessageForSuccessfulPurchase() {
        cy.log('Click on Add New Address Button');
        return this.getConfirmationMessageForSuccessfulPurchase().should('be.visible');
    }

    clickOnButtonCheckout() {
        cy.log('Click on Checkout Button');
        return this.getButtonCheckout().click();
    }

    clickOnButtonProceedToReview() {
        cy.log('Click on Proceed To Review Button');
        return this.getButtonProceedToReview().click();
    }

    clickRadioAddedCard() {
        cy.log('Click on Radiobutton for Added Card');
        return this.getRadioAddedCard().click();
    }

    clickOnLinkAddNewCard() {
        cy.log('Click on Add New Address Button');
        return this.getLinkAddNewCard().click();
    }

    clickOnButtonProceedToDelivery() {
        cy.log('Click on proceed to delivery Button');
        return this.getButtonProceedToDelivery().click();
    }

    clickOnButtonProceedToPayment() {
        cy.log('Click on proceed to payment button');
        return this.getButtonProceedToPayment().click();
    }

    clickOnCheckboxDeliveryMethod() {
        cy.log('Click on proceed button');
        return this.getCheckboxDeliveryMethod().click();
    }

    clickOnAddedAddressCheckbox() {
        cy.log('Click on Added Address checkbox');
        return this.getCheckboxAddedAddress().click();
    }

    clickOnButtonSubmit() {
        cy.log('Click on submit Button');
        return this.getButtonSubmit().click();
    }

    typeIntoCountryField(country) {
        cy.log(`Typing ${country} into country field`);
        return this.getFieldCountry().type(country);
    }

    typeIntoNameField(name) {
        cy.log(`Typing ${name} into name field`);
        return this.getFieldName().type(name);
    }

    typeIntoMobilePhoneField(phoneNumber) {
        cy.log(`Typing ${phoneNumber} into phone number field`);
        return this.getFieldMobilePhone().type(phoneNumber);
    }

    typeIntoZipCodeField(zipCode) {
        cy.log(`Typing ${zipCode} into zip code field`);
        return this.getFieldZipCode().type(zipCode);
    }

    typeIntoAddressField(address) {
        cy.log(`Typing ${address} into address field`);
        return this.getFieldAddress().type(address);
    }

    typeIntoCityField(city) {
        cy.log(`Typing ${city} into city field`);
        return this.getFieldCity().type(city);
    }

    typeIntoNameAddNewCardField(nameLastname) {
        cy.log(`Typing ${nameLastname} into name lastname field`);
        return this.getFieldNameAddNewCard().type(nameLastname);
    }

    typeIntoCardNumberField(cardNumber) {
        cy.log(`Typing ${cardNumber} into card number field`);
        return this.getFieldCardNumber().type(cardNumber);
    }

    typeIntoDropdownMonth(month) {
        cy.log(`Typing ${month} into month field`);
        return this.getDropdownMonth().select(month);
    }

    typeIntoDropdownYear(year) {
        cy.log(`Typing ${year} into year field`);
        return this.getDropdownYear().select(year);
    }

    focusingOnMobilePhoneField() {
        cy.log('Focused mobile phone field');
        return this.getFieldMobilePhone().focus();
    }

    focusingOnCityField() {
        cy.log('Focusing city field');
        return this.getFieldCity().focus();
    }

    checkingFieldCityError() {
        cy.log('Focusing city field');
        return this.getFieldCityError().contains('Please provide a city.')
            .should('be.visible');
    }

}

export default new AddressAndPaymentAddingPages();
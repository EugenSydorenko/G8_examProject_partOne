import userData from '../fixtures/userData.json'
import landingPage from "../support/pages/LandingPage";
import loginPage from "../support/pages/LoginPage";
import userRegistrationPage from "../support/pages/UserRegistrationPage";
import allProductsPage from "../support/pages/AllProductsPage";
import basketPage from "../support/pages/BasketPage";
import addressAndPaymentAddingPages from "../support/pages/AddressAndPaymentAddingPages";
import Helper from "../support/helper";

describe('placing an order test suite', () => {
    const Helper = require('../support/helper');
    let modifiedEmail;

    beforeEach(() => {
        landingPage.visit();
        landingPage.clickButtonCloseWelcomeBanner();
        landingPage.clickButtonAccount();
        landingPage.clickButtonLogin();

        loginPage.clickLinkNotYetCustomer();

        // User registration
        modifiedEmail = Helper.emailModificationByAddingDate(userData.baseEmail);
        userRegistrationPage.typeIntoFieldEmail(modifiedEmail);
        userRegistrationPage.typeIntoFieldPassword(userData.password);
        userRegistrationPage.typeIntoFieldConfirmPassword(userData.password);

        userRegistrationPage.clickSecuritySelectorQuestion();
        userRegistrationPage.clickSecurityQuestionAnswer();

        userRegistrationPage.typeIntoSecurityQuestionAnswerField(userData.securityAnswer);
        userRegistrationPage.clickButtonRegister();

        loginPage.checkIfSuccessfulNewUserSignUpMessageAppeared();

        loginPage.typeIntoEmailField(modifiedEmail);
        loginPage.typeIntoPasswordField(userData.password);
        loginPage.clickOnLoginButton();

        allProductsPage.checkIfBasketAppeared();
    })

    it('Placing an order', () => {
        allProductsPage.clickOnFirstAddToBasketButtons(3);
        allProductsPage.clickOnBasket();

        basketPage.checkIfTotalPriceGreaterThanZero();

        basketPage.clickOnCheckoutButton();

        addressAndPaymentAddingPages.clickOnButtonAddNewAddress();
        addressAndPaymentAddingPages.typeIntoCountryField(userData.country);
        addressAndPaymentAddingPages.typeIntoNameField(userData.fullName);
        addressAndPaymentAddingPages.typeIntoMobilePhoneField(userData.phoneNumber);
        addressAndPaymentAddingPages.typeIntoZipCodeField(userData.zipCode);
        addressAndPaymentAddingPages.typeIntoAddressField(userData.address);
        addressAndPaymentAddingPages.typeIntoCityField(userData.city);
        addressAndPaymentAddingPages.clickOnButtonSubmit();
        addressAndPaymentAddingPages.clickOnAddedAddressCheckbox();
        addressAndPaymentAddingPages.clickOnButtonProceedToPayment();
        addressAndPaymentAddingPages.clickOnCheckboxDeliveryMethod();
        addressAndPaymentAddingPages.clickOnButtonProceedToDelivery();
        addressAndPaymentAddingPages.clickOnLinkAddNewCard();
        addressAndPaymentAddingPages.typeIntoNameAddNewCardField(userData.fullName);
        addressAndPaymentAddingPages.typeIntoCardNumberField(userData.cardNumber);
        addressAndPaymentAddingPages.typeIntoDropdownMonth(userData.month);
        addressAndPaymentAddingPages.typeIntoDropdownYear(userData.year);
        addressAndPaymentAddingPages.clickOnButtonSubmit();
        addressAndPaymentAddingPages.clickRadioAddedCard();
        addressAndPaymentAddingPages.clickOnButtonProceedToReview();
        addressAndPaymentAddingPages.clickOnButtonCheckout();

        addressAndPaymentAddingPages.checkingForConfirmationMessageForSuccessfulPurchase();
    });

    it('Placing an order without inputting city', () => {
        allProductsPage.clickOnFirstAddToBasketButtons(3);
        allProductsPage.clickOnBasket();

        basketPage.clickOnCheckoutButton();

        addressAndPaymentAddingPages.clickOnButtonAddNewAddress();
        addressAndPaymentAddingPages.typeIntoCountryField(userData.country);
        addressAndPaymentAddingPages.typeIntoNameField(userData.fullName);
        addressAndPaymentAddingPages.typeIntoMobilePhoneField(userData.phoneNumber);
        addressAndPaymentAddingPages.typeIntoZipCodeField(userData.zipCode);
        addressAndPaymentAddingPages.typeIntoAddressField(userData.address);

        addressAndPaymentAddingPages.focusingOnCityField();
        addressAndPaymentAddingPages.focusingOnMobilePhoneField();
        addressAndPaymentAddingPages.checkingFieldCityError();

    });

})
import landingPage from "../support/pages/LandingPage";
import loginPage from "../support/pages/LoginPage";
import userRegistrationPage from "../support/pages/UserRegistrationPage";
import allProductsPage from "../support/pages/AllProductsPage";
import basketPage from "../support/pages/BasketPage";
import addressAndPaymentAddingPages from "../support/pages/AddressAndPaymentAddingPages";
import userData from "../fixtures/userData.json";
import Helper from "../support/helper";

describe('placing an order test suite', () => {
    const Helper = require('../support/helper');
    let modifiedEmail;

    before(() => {
        landingPage.visit();
        landingPage.clickButtonCloseWelcomeBanner();
        landingPage.clickButtonAccount();
        landingPage.clickButtonLogin();

        loginPage.clickLinkNotYetCustomer();

        // User Registration
        modifiedEmail = Helper.emailModificationByAddingDate(userData.baseEmail);
        userRegistrationPage.typeIntoFieldEmail(modifiedEmail);
        userRegistrationPage.typeIntoFieldPassword(userData.password);
        userRegistrationPage.typeIntoFieldConfirmPassword(userData.password);

        userRegistrationPage.clickSecuritySelectorQuestion();
        userRegistrationPage.clickSecurityQuestionAnswer();

        userRegistrationPage.typeIntoSecurityQuestionAnswerField(userData.securityAnswer);
        userRegistrationPage.clickButtonRegister();

        loginPage.checkIfSuccessfulNewUserSignUpMessageAppeared();

        loginPage.visit();
        loginPage.typeIntoEmailField(modifiedEmail);
        loginPage.typeIntoPasswordField(userData.password);
        loginPage.clickOnLoginButton();

        allProductsPage.checkIfBasketAppeared();
    })

    it('Placing an order', () => {

        const productNames = [
            'Carrot Juice (1000ml)',
            'Melon Bike',
            'Juice Shop' // Add more product names as needed
        ];

        productNames.forEach((productName) => {
            Helper.addToBasketByName(productName);
        });

        allProductsPage.clickOnBasket();

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

})
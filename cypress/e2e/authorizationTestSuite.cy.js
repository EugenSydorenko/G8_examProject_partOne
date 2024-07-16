import userData from '../fixtures/userData.json'
import landingPage from "../support/pages/LandingPage";
import loginPage from "../support/pages/LoginPage";
import userRegistrationPage from "../support/pages/UserRegistrationPage";
import allProductsPage from "../support/pages/AllProductsPage";

describe('authorization test suite', () => {
    const Helper = require('../support/helper');
    let modifiedEmail = Helper.emailModificationByAddingDate(userData.baseEmail);

    before(() =>{
        landingPage.visit();
        landingPage.clickButtonCloseWelcomeBanner();
        landingPage.clickButtonAccount();
        landingPage.clickButtonLogin();

        loginPage.clickLinkNotYetCustomer();

        // User Registration
        userRegistrationPage.typeIntoFieldEmail(modifiedEmail);
        userRegistrationPage.typeIntoFieldPassword(userData.password);
        userRegistrationPage.typeIntoFieldConfirmPassword(userData.password);

        userRegistrationPage.clickSecuritySelectorQuestion();
        userRegistrationPage.clickSecurityQuestionAnswer();

        userRegistrationPage.typeIntoSecurityQuestionAnswerField(userData.securityAnswer);
        userRegistrationPage.clickButtonRegister();

        loginPage.checkIfSuccessfulNewUserSignUpMessageAppeared();


    })

    it('Authorization with valid data', () => {
        loginPage.visit();
        loginPage.typeIntoEmailField(modifiedEmail);
        loginPage.typeIntoPasswordField(userData.password);
        loginPage.clickOnLoginButton();

        allProductsPage.checkIfBasketAppeared();

    });

    it('Authorization with invalid data', () => {
        loginPage.visit();
        landingPage.clickButtonCloseWelcomeBanner();
        loginPage.typeIntoEmailField('Hello' + modifiedEmail);
        loginPage.typeIntoPasswordField(userData.password);
        loginPage.clickOnLoginButton();

        loginPage.checkIfLoginErrorMessageAppeared()
    });

})
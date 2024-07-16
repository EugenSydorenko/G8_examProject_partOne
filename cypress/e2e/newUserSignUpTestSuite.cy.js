import userData from '../fixtures/userData.json'
import landingPage from "../support/pages/LandingPage";
import loginPage from "../support/pages/LoginPage";
import userRegistrationPage from "../support/pages/UserRegistrationPage";

describe('new user signUp suite', () => {
    const Helper = require('../support/helper');
    let modifiedEmail = Helper.emailModificationByAddingDate(userData.baseEmail);

    it('new user signUp with valid data', () => {
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
    });

    it('registration fail existing email', () => {
        let modifiedUniqueEmail = Helper.emailModificationByAddingDate(modifiedEmail);

        landingPage.visit();
        landingPage.clickButtonCloseWelcomeBanner();
        landingPage.clickButtonAccount();
        landingPage.clickButtonLogin();

        loginPage.clickLinkNotYetCustomer();

        // User Registration
        userRegistrationPage.typeIntoFieldEmail(modifiedUniqueEmail);
        userRegistrationPage.typeIntoFieldPassword(userData.password);
        userRegistrationPage.typeIntoFieldConfirmPassword(userData.password);

        userRegistrationPage.clickSecuritySelectorQuestion();
        userRegistrationPage.clickSecurityQuestionAnswer();

        userRegistrationPage.typeIntoSecurityQuestionAnswerField(userData.securityAnswer);
        userRegistrationPage.clickButtonRegister();

        loginPage.checkIfSuccessfulNewUserSignUpMessageAppeared();


        landingPage.visit();
        landingPage.clickButtonAccount();
        landingPage.clickButtonLogin();

        loginPage.clickLinkNotYetCustomer();

        // User Registration with same email
        userRegistrationPage.typeIntoFieldEmail(modifiedUniqueEmail);
        userRegistrationPage.typeIntoFieldPassword(userData.password);
        userRegistrationPage.typeIntoFieldConfirmPassword(userData.password);

        userRegistrationPage.clickSecuritySelectorQuestion();
        userRegistrationPage.clickSecurityQuestionAnswer();

        userRegistrationPage.typeIntoSecurityQuestionAnswerField(userData.securityAnswer);
        userRegistrationPage.clickButtonRegister();

        userRegistrationPage.checkingUserRegistrationErrorMessage();

    });
})
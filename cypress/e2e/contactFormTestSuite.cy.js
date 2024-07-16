import userData from '../fixtures/userData.json'
import landingPage from "../support/pages/LandingPage";
import loginPage from "../support/pages/LoginPage";
import userRegistrationPage from "../support/pages/UserRegistrationPage";
import allProductsPage from "../support/pages/AllProductsPage";
import feedBackFormPage from "../support/pages/FeedBackFormPage";

describe('Contact us form test suite', () => {
    const Helper = require('../support/helper');
    let modifiedEmail = Helper.emailModificationByAddingDate(userData.baseEmail);

    before(() => {
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

        loginPage.visit();
        loginPage.typeIntoEmailField(modifiedEmail);
        loginPage.typeIntoPasswordField(userData.password);
        loginPage.clickOnLoginButton();

        allProductsPage.checkIfBasketAppeared();
    })

    it('Feedback form successful submit', () => {
        feedBackFormPage.visit();
        feedBackFormPage.typingCommentIntoCommandField(userData.comment);
        feedBackFormPage.moveSliderToRating(userData.sliderPosition);
        feedBackFormPage.solvingCaptcha();
        feedBackFormPage.clickingOnSubmitButton();
        feedBackFormPage.checkingIfSuccessFormSubmittionMessageAppeared();
    });

    it('Feedback form submit without captcha', () => {
        feedBackFormPage.visit();
        landingPage.clickButtonCloseWelcomeBanner();
        feedBackFormPage.typingCommentIntoCommandField(userData.comment);
        feedBackFormPage.moveSliderToRating(userData.sliderPosition);
        feedBackFormPage.typingWrongAnswerToCaptcha('1');
        feedBackFormPage.clickingOnSubmitButton();

        feedBackFormPage.checkingIfCaptchaAnswerErrorMessageAppeared();
    });

})
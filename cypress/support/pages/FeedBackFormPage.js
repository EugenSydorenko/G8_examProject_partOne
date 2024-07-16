class FeedBackFormPage {

    constructor() {
        this.fieldComment = '#comment';
        this.sliderRaiting = 'mat-slider#rating';
        this.captchaEquasion = 'code#captcha';
        this.fieldCaptchaControl = '#captchaControl';
        this.buttonSubmit = '#submitButton';
        this.successfulMessage = '.mat-simple-snack-bar-content:contains("Thank you for your feedback.")';
        this.captchaAnswerErrorMessage = 'span.mat-simple-snack-bar-content';
    }

    visit() {
        cy.log('Open contact form page');
        cy.visit('/#/contact');
    }

    getFieldComment() {
        return cy.get(this.fieldComment);
    }

    getCaptchaAnswerErrorMessage() {
        return cy.get(this.captchaAnswerErrorMessage);
    }

    getSuccessfulMessage() {
        return cy.get(this.successfulMessage);
    }

    getSliderRating() {
        return cy.get(this.sliderRaiting);
    }

    getButtonSubmit() {
        return cy.get(this.buttonSubmit);
    }

    getCaptchaEquasion() {
        return cy.get(this.captchaEquasion);
    }

    getFieldCaptchaControl() {
        return cy.get(this.fieldCaptchaControl);
    }

    typingCommentIntoCommandField(comment) {
        cy.log(`typing ${comment} into comment field`);
        return this.getFieldComment().type(comment);
    }

    checkingIfSuccessFormSubmittionMessageAppeared() {
        cy.log(`Checking if successful submittion message appeared`);
        return this.getSuccessfulMessage().should('be.visible');
    }

    solvingCaptcha() {
        cy.log('Solving captcha');
        return this.getCaptchaEquasion().invoke('text').then(captchaText => {
            // Evaluate the arithmetic expression
            const answer = eval(captchaText); // Use eval to calculate the answer

            // Type the calculated answer into the CAPTCHA input field
            this.getFieldCaptchaControl().type(answer.toString());
        })
    }

    typingWrongAnswerToCaptcha(number) {
        return this.getFieldCaptchaControl().type(number)

    }

    checkingIfCaptchaAnswerErrorMessageAppeared() {
        return this.getCaptchaAnswerErrorMessage().should('contain.text', 'Wrong answer to CAPTCHA. Please try again.');

    }

    clickingOnSubmitButton() {
        return this.getButtonSubmit().click()
    }

    moveSliderToRating(rating) {
        cy.log('moving slider into desired position');
        return this.getSliderRating().then($slider => {
            const min = Number($slider.attr('aria-valuemin'));
            const max = Number($slider.attr('aria-valuemax'));

            // Calculate the percentage position for the value
            const percentage = (rating - min) / (max - min);

            // Get the slider's width to calculate the position in pixels
            const width = $slider.width();
            const xPosition = width * percentage;

            // Move the slider to the calculated position
            cy.wrap($slider).click(xPosition, 0);
        })
    }

}

export default new

FeedBackFormPage();
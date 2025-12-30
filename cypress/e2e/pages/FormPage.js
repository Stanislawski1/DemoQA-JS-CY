class FormPage {

    get openPage() {
        return cy.visit('https://demoqa.com/automation-practice-form')
    }

    get moveToFormPage() {
        return cy.contains('Forms').click()
    }

    get moveToPractiseForm() {
        return cy.contains('Practice Form').click()
    }

    get usePracticeForm() {

    }
}
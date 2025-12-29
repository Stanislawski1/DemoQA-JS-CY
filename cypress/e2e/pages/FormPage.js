class FormPage {

    get moveToFormPage() {
        return cy.contains('Forms').click()
    }

    get moveToPractiseForm() {
        return cy.contains('Practice Form').click()
    }
}
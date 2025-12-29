class ElementsPage {

    get openTheTextBoxPage() {
        cy.visit("https://demoqa.com/text-box");
    }

    get userNameInput() {
        return cy.get('#userName').type("Antonio Banderas");
    }

    get userEmailInput() {
        return cy.get('#userEmail').type("Antonia@gmail.com");
    }

    get currentAddressInput() {
        return cy.get('#currentAddress').type("Spain");
    }

    get permanentAddress() {
        return cy.get('#permanentAddress').type("Florida, LA");
    }

    get clickSubmitButton() {
        return cy.get('#submit').click();
    }

    get checkOfSubmit() {
        return cy.get('#name').should('contain', 'Antonio Banderas');
    }

    get visitCheckBoxPage() {
        return cy.get('#item-1').click()
    }

    get isOpened() {
        return cy.get('.text-center').should('contain', 'Check Box')
    }

    get useActiveElement() {
        return cy.get(".rct-title").click()
    }

    get isChecked() {
        return cy.get(".text-success").should('contain', 'home')
    }

    get goToRadioButton() {
        return cy.contains('Radio Button').click
    }

    get useRadioButtons() {
        return cy.get('#yesRadio').click()
    }

    get isRadioButtonActive() {
        return cy.get('.text-success').should('contain', 'Yes')
    }

    get goToWebTable() {
        return cy.contains('Web Tables').click()
    }

    get useWebTable() {
        return cy.get('#addNewRecordButton').click()
    }

    get goToButtons() {
        return cy.contains('Buttons').click()
    }

    get useButtons() {
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#doubleClickMessage').should('contain', 'You have done a double click')
        cy.get('#rightClickBtn').rightclick()
        cy.get('#rightClickMessage').should('contain', 'You have done a right click')
        cy.contains('Click Me').click()
        cy.get('#dynamicClickMessage').should('contain', 'You have done a dynamic click')
    }

    get goToLinks() {
        cy.contains('Links').click()
    }

    get checkTheLinks() {
        cy.contains('Home').click()
            .should('have.attr', 'href', 'https://demoqa.com')
            .go('back')
        cy.get('#dynamicLink').click()
            .should('have.attr', 'href', 'https://demoqa.com')
            .go('back')
    }
}
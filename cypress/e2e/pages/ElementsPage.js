
import BasePage from "./base/BasePage";
import { elements } from './Elements';
import {ROUTES} from "../../support/urls";

class ElementsPage extends BasePage {

    openTheTextBoxPage() {
        super.open(ROUTES.TEXTBOX)
    }

    openCheckBoxPage() {
        super.open(ROUTES.CHECKBOXES)
    }

    openRadioButtonsPage() {
        super.open(ROUTES.RADIOBUTTONS)
    }

    openButtonsPage() {
        super.open(ROUTES.BUTTONS)
    }

    openWebTablePage() {
        super.open(ROUTES.WEBTABLES)
    }

    openLinksPage() {
        super.open(ROUTES.LINKS)
    }

    useTextBox(userName, userEmail, currentAddress, permanentAddress) {
        cy.get(elements.userName).type(userName);
        cy.get(elements.userEmail).type(userEmail);
        cy.get(elements.currentAddress).type(currentAddress);
        cy.get(elements.permanentAddress).type(permanentAddress);
        cy.get(elements.confirmButton).click();
        cy.get(elements.nameContainer).should('contain', userName);

    }

    useCheckBoxes() {
        cy.get(elements.actionElement).click()
        cy.get(elements.checkBoxContainer).should('contain', 'Check Box')
        cy.get(elements.checkBox).click()
        cy.get(elements.successMessage).should('contain', 'home')
    }

    useRadioButtons() {
        cy.contains('Yes').click({ force: true })
        cy.get(elements.successMessage).should('contain', 'Yes')
    }

    useWebTable(firstName, lastName,userEmail, age, salary, department) {
        cy.get(elements.addNewRecordButton).click()
        const newUser = {
            firstName: firstName,
            lastName: lastName,
            userEmail: userEmail,
            age: age,
            salary: salary,
            department: department
        };
        cy.fillRegistrationForm(newUser);
    }

    useButtons() {
        cy.contains('button', /^Double Click Me$/).dblclick()
        cy.get(elements.doubleClickMessage).should('contain', 'You have done a double click')
        cy.contains('button', /^Right Click Me$/).rightclick()
        cy.get(elements.rightClickMessage).should('contain', 'You have done a right click')
        cy.contains('button', /^Click Me$/).click();
        cy.get(elements.dynamicClickMessage).should('contain', 'You have done a dynamic click')
    }

    checkTheLinks() {
        cy.contains('Home').click()
            .should('have.attr', 'href', 'https://demoqa.com')
            .go('back')
        cy.get('#dynamicLink').click()
            .should('have.attr', 'href', 'https://demoqa.com')
            .go('back')
    }
}
export default new ElementsPage()
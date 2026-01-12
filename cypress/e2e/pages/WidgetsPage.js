import { elements } from './Elements';
import BasePage from "./base/BasePage";
import {ROUTES} from "../../support/urls";

class WidgetsPage extends BasePage{

    openAutoCompleteLink() {
        super.open(ROUTES.AUTOCOMPLETE)
    }

    openCalendarLink() {
        super.open(ROUTES.DATEPICKER)
    }

    useAutoComplete(colorName) {
        cy.get(elements.autoCompleteContainer)
            .type(colorName)
        cy.get(elements.autoCompleteMenu)
            .contains(colorName)
            .click();
        cy.get(elements.autoCompleteLabel).should('have.text', colorName)
    }

    useSimpleDatePicker(dateNum) {
        cy.get(elements.datePikerInput).clear().type(dateNum)
        cy.get(elements.datePikerChosen).should('have.text', dateNum)
    }

    useDateNtimePiker(dateNum, timeNum) {
        cy.get(elements.dateAndTimePickerInput).clear().type(dateNum, timeNum)
        cy.get(elements.dateAndTimePickerInput).type(timeNum)
        cy.get(elements.selectedDateNtime).should('have.text', timeNum)
    }
}
export default new WidgetsPage();

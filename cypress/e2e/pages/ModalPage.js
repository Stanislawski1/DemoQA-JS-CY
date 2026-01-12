import BasePage from "./base/BasePage";
import {ROUTES} from "../../support/urls";
import { bigModalWindowHeader } from '../../fixtures/DataStorage';
import {elements} from "./Elements";

class ModalPage extends BasePage{

    openModalPage() {
        this.step('Открытие страницы ModalPage');
        super.open(ROUTES.MODAL)
    }

    useTheSmallModal() {
        this.step('Проверка использования TheSmallModal');
        cy.get(elements.showSmallModal).click()
        cy.get(elements.modalContent).should('be.visible')
        cy.get(elements.modalBody).should('have.text', 'This is a small modal. It has very less content')
        cy.get(elements.closeSmallModal).click()
        cy.get(elements.modalContent).should('not.exist')
    }

    useTheLargeModal() {
        this.step('Проверка использования TheLargeModal');
        cy.get(elements.showLargeModal).click()
        cy.get(elements.modalContent).should('be.visible')
        cy.get(elements.modalBody).should('have.text', bigModalWindowHeader[0].text);
        cy.get(elements.closeLargeModal).click()
        cy.get(elements.modalContent).should('not.exist')
    }
}
export default new ModalPage()
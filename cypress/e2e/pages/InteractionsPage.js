import BasePage from "./base/BasePage";
import {ROUTES} from "../../support/urls";
import {elements} from "./Elements";

class InteractionsPage extends BasePage{

    openSortablePage() {
        super.open(ROUTES.SORTABLE)
    }

    openSelectablePage() {
        super.open(ROUTES.SELECTABLE)
    }

    openResizablePage() {
        super.open(ROUTES.RESIZABLE)
    }

    useDrugNDrop() {
        cy.dragAndDrop('One', 'Six');
        cy.dragAndDrop('Two', 'Six');
        cy.dragAndDrop('Three', 'Six');
        cy.dragAndDrop('Four', 'Six');
        cy.dragAndDrop('Five', 'Six');

        cy.contains(elements.groupOfDrugNDrop, 'Two').next().should('have.text', 'One');
    }

    useInteractiveDrugNDrop() {
        cy.get(elements.gridButton).click()
        cy.get(elements.cubeInteractiveElement).within(() => {
            cy.dragAndDrop('One', 'Nine');
            cy.dragAndDrop('Two', 'Nine');
            cy.dragAndDrop('Three', 'Nine');
            cy.dragAndDrop('Four', 'Nine');
            cy.dragAndDrop('Five', 'Nine');
            cy.dragAndDrop('Six', 'Nine');
            cy.dragAndDrop('Seven', 'Nine');
            cy.dragAndDrop('Eight', 'Nine');
            cy.contains(elements.listOfItems, 'Two').next().should('have.text', 'One');
        });
    }

    useSelectable(text) {
        cy.contains(text).click().should('have.class', 'active')
    }

    useGridSelectable(elOne, elTwo, elThree,elFour, elFive) {
        cy.contains('Grid').click()
        cy.contains(elOne).click().should('have.class', 'active')
        cy.contains(elTwo).click().should('have.class', 'active')
        cy.contains(elThree).click().should('have.class', 'active')
        cy.contains(elFour).click().should('have.class', 'active')
        cy.contains(elFive).click().should('have.class', 'active')
    }

    useResizable() {
        cy.get(elements.resizableHandle).first().drag(elements.resizableBox, {
            target: { x: 300, y: 300 },
            force: true
        });

        cy.get(elements.resizableBox).invoke('width').should('be.closeTo', 300, 15);
        cy.get(elements.resizableBox).invoke('height').should('be.closeTo', 300, 15);
    }
}
export default new InteractionsPage()
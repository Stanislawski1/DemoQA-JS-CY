import BasePage from "./base/BasePage";
import {ROUTES} from "../../support/urls";
import {elements} from "./Elements";

class InteractionsPage extends BasePage{

    openSortablePage() {
        this.step('Открытие SortablePage');
        super.open(ROUTES.SORTABLE)
    }

    openSelectablePage() {
        this.step('Открытие SelectablePage');
        super.open(ROUTES.SELECTABLE)
    }

    openResizablePage() {
        this.step('Открытие ResizablePage');
        super.open(ROUTES.RESIZABLE)
    }

    useDrugNDrop() {
        this.step('Проверка функции DrugNDrop');
        cy.dragAndDrop('One', 'Six');
        cy.dragAndDrop('Two', 'Six');
        cy.dragAndDrop('Three', 'Six');
        cy.dragAndDrop('Four', 'Six');
        cy.dragAndDrop('Five', 'Six');

        cy.contains(elements.groupOfDrugNDrop, 'Two').next().should('have.text', 'One');
    }

    useInteractiveDrugNDrop() {
        this.step('Проверка функции интерактивного DrugNDrop');
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
        this.step('Проверка функции Selectable');
        cy.contains(text).click().should('have.class', 'active')
    }

    useGridSelectable(elOne, elTwo, elThree,elFour, elFive) {
        this.step('Проверка функции GridSelectable');
        cy.contains('Grid').click()
        cy.contains(elOne).click().should('have.class', 'active')
        cy.contains(elTwo).click().should('have.class', 'active')
        cy.contains(elThree).click().should('have.class', 'active')
        cy.contains(elFour).click().should('have.class', 'active')
        cy.contains(elFive).click().should('have.class', 'active')
    }

    useResizable() {
        this.step('Проверка функции Resizable');
        cy.get(elements.resizableHandle).first().drag(elements.resizableBox, {
            target: { x: 300, y: 300 },
            force: true
        });

        cy.get(elements.resizableBox).invoke('width').should('be.closeTo', 300, 15);
        cy.get(elements.resizableBox).invoke('height').should('be.closeTo', 300, 15);
    }
}
export default new InteractionsPage()
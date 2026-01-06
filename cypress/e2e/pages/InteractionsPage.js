class InteractionsPage {

    openSortablePage() {
        cy.visit('https://demoqa.com/sortable')
    }

    openSelectablePage() {
        cy.visit('https://demoqa.com/selectable')
    }

    openResizablePage() {
        cy.visit('https://demoqa.com/resizable')
    }

    useDrugNDrop() {
        cy.dragAndDrop('One', 'Six');
        cy.dragAndDrop('Two', 'Six');
        cy.dragAndDrop('Three', 'Six');
        cy.dragAndDrop('Four', 'Six');
        cy.dragAndDrop('Five', 'Six');

        cy.contains('.list-group-item', 'Two').next().should('have.text', 'One');
    }

    useInteractiveDrugNDrop() {
        cy.get('#demo-tab-grid').click()
        cy.get('#demo-tabpane-grid').within(() => {
            cy.dragAndDrop('One', 'Nine');
            cy.dragAndDrop('Two', 'Nine');
            cy.dragAndDrop('Three', 'Nine');
            cy.dragAndDrop('Four', 'Nine');
            cy.dragAndDrop('Five', 'Nine');
            cy.dragAndDrop('Six', 'Nine');
            cy.dragAndDrop('Seven', 'Nine');
            cy.dragAndDrop('Eight', 'Nine');
            cy.contains('.list-group-item', 'Two').next().should('have.text', 'One');
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
        cy.get('.react-resizable-handle').first().drag('#resizableBoxWithRestriction', {
            target: { x: 300, y: 300 }, // Координаты внутри целевого элемента
            force: true
        });

        cy.get('#resizableBoxWithRestriction').invoke('width').should('be.closeTo', 300, 15);
        cy.get('#resizableBoxWithRestriction').invoke('height').should('be.closeTo', 300, 15);
    }
}
export default new InteractionsPage()
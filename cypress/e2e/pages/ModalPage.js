class ModalPage {

    openModalPage() {
        cy.visit('https://demoqa.com/modal-dialogs')
    }

    useTheSmallModal() {
        cy.ignoreErrors()
        cy.get('#showSmallModal').click()
        cy.get('modal-content').should('be.visible')
        cy.get('modal-body').should('have.text', 'This is a small modal. It has very less content')
        cy.get('#closeSmallModal').click()
        cy.get('modal-content').should('not.exist')
    }

    useTheLargeModal() {
        cy.get('#showLargeModal').click()
        cy.get('modal-content').should('be.visible')
        cy.get('.modal-body').should('have.text', bigModalWindowHeader[0].text);
        cy.get('#closeLargeModal').click()
        cy.get('modal-content').should('not.exist')
    }
}
export default new ModalPage()
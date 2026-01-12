class BasePage {

    open(path) {
        cy.visit(path);
    }
}
export default BasePage;
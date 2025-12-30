import AlertsPage from './pages/AlertsPage';

describe("Проверка алертов", () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    it('Опция: подмена window.open и проверка вызова (пример)', () => {
        cy.visit('https://demoqa.com/browser-windows');
        cy.window().then((win) => {
            const openStub = cy.stub(win, 'open').as('openStub');
            cy.get('#tabButton').click().then(() => {
                cy.get('@openStub').should('be.called').and((stub) => {
                    const firstCallArgs = stub.getCall(0).args;
                    expect(firstCallArgs[0]).to.include('/sample');
                });
            });
        });
    });
});
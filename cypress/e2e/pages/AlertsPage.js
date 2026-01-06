class AlertsPage {

    openAlertsPage() {
        cy.visit('https://demoqa.com/alerts')
    }

    checkOpenedWindow() {
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
    }

    checkTheSimpleAlert() {
        cy.on('window:alert', (text) =>  {
            expect(text).to.equal('You clicked a button')
        });
        cy.get('#alertButton').click()
    }

    checkTheAlertWithWait() {
        cy.on('window:alert', (text) =>  {
            expect(text).to.equal('This alert appeared after 5 seconds')
        });
        cy.get('#timerAlertButton').click()
    }

    checkTheAlertWithChosen() {
        cy.on('window:alert', (text) =>  {
            expect(text).to.equal('Do you confirm action?')
        });
        cy.get('#confirmButton').click()
    }

    checkYesNoAlert() {
        cy.visit('https://demoqa.com/alerts');
        // Добираемся до объекта window
        cy.window().then((win) => {
            // Подменяем (stub) метод prompt
            // Когда он вызовется, он вернет "Antonio"
            cy.stub(win, 'prompt').returns('Antonio');
        });
        cy.get('#promtButton').click();
        // Проверяем, что текст появился на странице
        cy.get('#promptResult').should('contain', 'Antonio');
    }
}
export default new AlertsPage();
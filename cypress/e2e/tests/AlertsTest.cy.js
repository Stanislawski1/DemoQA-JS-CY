import AlertsPage from '../pages/AlertsPage';

describe("Проверка алертов", () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    it('Опция: подмена window.open и проверка вызова (пример)', () => {
        AlertsPage.checkOpenedWindow
    });

    it('Проверка стандартного алерта', () => {
        cy.visit('https://demoqa.com/alerts')
        AlertsPage.checkTheSimpleAlert
    });

    it('Проверка алерта с ожиданием', () => {
        cy.visit('https://demoqa.com/alerts')
        AlertsPage.checkTheAlertWithWait
    });

    it('Проверка алерта с выбором действия', () => {
        cy.visit('https://demoqa.com/alerts')
        AlertsPage.checkTheAlertWithChosen
    });

    it('Prompt Alert: Ввод текста', () => {
        cy.visit('https://demoqa.com/alerts');
        AlertsPage.checkYesNoAlert
    });
});
import FormPage from './pages/FormPage';
import MainPage from './pages/MainPage';

describe("Тестирование вкладки Form Page", () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    it('Проверка заполнения формы регистрации', () => {
        FormPage.openPage;
        const newUser = {
            firstName: 'Antonio',
            lastName: 'Banderas',
            userEmail: 'Anton@gmail.com',
            userNumber: '3753337771986',
            currentAddress: 'Florida',
            department: 'AQA'
        };
        cy.fillPracticeForm(newUser)
    });
})
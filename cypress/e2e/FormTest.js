import FormPage from './pages/FormPage';
import MainPage from './pages/MainPage';

describe('Тестирование вкладки Form Page', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    it('Проверка заполнения формы регистрации', () => {
        MainPage.open
        FormPage.moveToFormPage
        FormPage.moveToPractiseForm
    });
})
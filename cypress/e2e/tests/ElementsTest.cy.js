import ElementsPage from '../pages/ElementsPage';
import linksData from '../../fixtures/DataStorage';

describe("Тестирование вкладки TextBox", () => {


    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    it("Должен заполнить форму TextBox", () => {
        ElementsPage.openTheTextBoxPage
        ElementsPage.userNameInput
        ElementsPage.userEmailInput
        ElementsPage.currentAddressInput
        ElementsPage.permanentAddress
        ElementsPage.clickSubmitButton
        ElementsPage.checkOfSubmit
        });

    it("Должен кликнуть на чекбоксы", () => {
        ElementsPage.visitCheckBoxPage
        ElementsPage.isOpened
        ElementsPage.useActiveElement
        ElementsPage.isChecked
    });

    it("Должен использовать RadioButton ", () => {
        ElementsPage.goToRadioButton
        ElementsPage.useRadioButtons
        ElementsPage.isRadioButtonActive
    });

    it("Должен зарегистрировать нового пользователя", () => {
        cy.get('#addNewRecordButton').click()
        const newUser = {
            firstName: 'Antonio',
            lastName: 'Banderas',
            userEmail: 'Anton@gmail.com',
            age: '45',
            salary: '69',
            department: 'AQA'
        };
        cy.fillRegistrationForm(newUser);
    });

    it("Должен нажать кнопки", () => {
        ElementsPage.goToRadioButton
        ElementsPage.goToButtons
        ElementsPage.useButtons
    });

    it("Должен нажать на линки", () => {
        ElementsPage.goToLinks
        ElementsPage.checkTheLinks
    });
});




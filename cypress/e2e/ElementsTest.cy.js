import ElementsPage from './pages/ElementsPage';

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

    it("Должен сипользовать RadioButton ", () => {
        ElementsPage.goToRadioButton
        ElementsPage.useRadioButtons
        ElementsPage.isRadioButtonActive
    });

});




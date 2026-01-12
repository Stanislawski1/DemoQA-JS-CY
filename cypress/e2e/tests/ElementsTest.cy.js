import ElementsPage from '../pages/ElementsPage';
import linksData from '../../fixtures/DataStorage';

describe("Тестирование вкладки TextBox", () => {


    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    it("Должен заполнить форму TextBox", () => {
        ElementsPage.openTheTextBoxPage()
        ElementsPage.useTextBox(
            "Antonio Banderas", "Antonio@gmail.com",
            "Barcelona", "Spain"
        )
        });

    it("Должен кликнуть на чекбоксы", () => {
        ElementsPage.openCheckBoxPage()
        ElementsPage.useCheckBoxes()
    });

    it("Должен использовать RadioButton ", () => {
        ElementsPage.openRadioButtonsPage()
        ElementsPage.useRadioButtons()
    });

    it("Должен зарегистрировать нового пользователя", () => {
        ElementsPage.openWebTablePage()
        ElementsPage.useWebTable(
            "Antonio", "Banderas",
            "Antonio@gmail.com", "45",
            "69", "AQA"
        )
    });

    it("Должен нажать кнопки", () => {
        ElementsPage.openButtonsPage()
        ElementsPage.useButtons()
    });

    // it("Должен нажать на линки", () => {
    //     ElementsPage.openLinksPage()
    //     ElementsPage.checkTheLinks()
    // });
});




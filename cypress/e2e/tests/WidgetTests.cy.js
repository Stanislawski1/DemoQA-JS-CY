import WidgetsPage from "../pages/WidgetsPage";


describe("Проверка виджетов", () => {

    it('Проверка автозаполнения', () => {
        cy.ignoreErrors()
        WidgetsPage.openAutoCompleteLink()
        WidgetsPage.useAutoComplete('Red')
    });

    it('Проверка использования календаря', () => {
        cy.ignoreErrors()
        WidgetsPage.openCalendarLink()
        WidgetsPage.useSimpleDatePicker('November 2000')
    });
    it('Проверка использования календаря с временем', () => {
        cy.ignoreErrors()
        WidgetsPage.openCalendarLink()
        WidgetsPage.useDateNtimePiker("January 2026 ", "09:30")
    });
});
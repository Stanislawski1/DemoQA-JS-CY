import WidgetsPage from "../pages/WidgetsPage";


describe("Проверка виджетов", () => {

    it('Проверка автозаполнения', () => {
        WidgetsPage.openAutoCompleteLink()
        WidgetsPage.useAutoComplete('Red')
    });

    it('Проверка использования календаря', () => {
        WidgetsPage.openCalendarLink()
        WidgetsPage.useSimpleDatePicker('November 2000')
    });
    it('Проверка использования календаря с временем', () => {
        WidgetsPage.openCalendarLink()
        WidgetsPage.useDateNtimePiker("January 2026 ", "09:30")
    });
});
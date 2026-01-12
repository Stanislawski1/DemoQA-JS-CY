import AcordianPage from '../pages/AccordianPage';

describe("Проверка страницы Accordian", () => {

    it('Проверка наличия динамических страниц по тексту', () => {
        AcordianPage.openAccordianPage();
        AcordianPage.checkOfFirstAccordian();
        AcordianPage.checkOfSecondAccordian();
        AcordianPage.checkOfThreeAccordian();
    });
});
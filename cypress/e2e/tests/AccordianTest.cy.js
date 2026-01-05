import AcordianPage from '../pages/AcordianPage';

describe("Проверка страницы Accordian", () => {

    it('Проверка наличия динамических страниц по тексту', () => {
        cy.ignoreErrors()
        cy.visit('https://demoqa.com/accordian')
        AcordianPage.checkOfFirstAccordian
        AcordianPage.checkOfSecondAccordian
        AcordianPage.checkOfThreeAccordian
    });
});
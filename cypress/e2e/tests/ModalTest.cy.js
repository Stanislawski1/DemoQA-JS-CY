import ModalPage from '../pages/ModalPage';

describe("Проверка модальных окон", () => {

    it('Проверка открытия/закрытия малого модального окна', () => {
        cy.ignoreErrors()
        cy.visit('https://demoqa.com/modal-dialogs')
        ModalPage.useTheSmallModal
    });

    it('Проверка открытия/закрытия крупного модального окна', () => {
        cy.visit('https://demoqa.com/modal-dialogs')
        ModalPage.useTheLargeModal
    });
});
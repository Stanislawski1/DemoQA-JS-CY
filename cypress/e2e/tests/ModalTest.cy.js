import ModalPage from '../pages/ModalPage';

describe("Проверка модальных окон", () => {

    it('Проверка открытия/закрытия малого модального окна', () => {
        ModalPage.openModalPage()
        ModalPage.useTheSmallModal()
    });

    it('Проверка открытия/закрытия крупного модального окна', () => {
        ModalPage.openModalPage()
        ModalPage.useTheLargeModal()
    });
});
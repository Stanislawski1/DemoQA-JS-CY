import FramesPage from '../pages/FramesPage';

describe("Проверка страницы фреймов", () => {


    it('Открытие страницы', () => {
        FramesPage.openFramesPage
    });

    it('Проверка наличия главного фрейма', () => {
        FramesPage.checkOfMainIFrame
    });

    it('Проверка наличия малого фрейма', () => {
        FramesPage.checkOfLittleIframe
    });
});
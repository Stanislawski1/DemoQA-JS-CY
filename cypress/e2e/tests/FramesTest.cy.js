import FramesPage from '../pages/FramesPage';

describe("Проверка страницы фреймов", () => {

    it('Проверка наличия главного фрейма', () => {
        FramesPage.openFramesPage();
        FramesPage.checkOfMainIFrame();
    });

    it('Проверка наличия малого фрейма', () => {
        FramesPage.openFramesPage();
        FramesPage.checkOfLittleIframe();
    });
});
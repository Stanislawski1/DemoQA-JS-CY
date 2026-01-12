import BasePage from "./base/BasePage";
import {ROUTES} from "../../support/urls";

class FramesPage extends BasePage{

    openFramesPage() {
        this.step('Открытие страницы фреймов');
        super.open(ROUTES.FRAMES)
    }

    checkOfMainIFrame() {
        this.step('Проверка наличия главного фрейма');
        cy.getIframeBody('#frame1', 'This is a sample page')
    }

    checkOfLittleIframe() {
        this.step('Проверка наличия малого фрейма');
        cy.getIframeBody('#frame2', 'This is a sample page')
    }
}
export default new FramesPage()
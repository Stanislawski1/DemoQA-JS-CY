import BasePage from "./base/BasePage";
import {ROUTES} from "../../support/urls";

class FramesPage extends BasePage{

    openFramesPage() {
        super.open(ROUTES.FRAMES)
    }

    checkOfMainIFrame() {
        cy.getIframeBody('#frame1', 'This is a sample page')
    }

    checkOfLittleIframe() {
        cy.getIframeBody('#frame2', 'This is a sample page')
    }
}
export default new FramesPage()
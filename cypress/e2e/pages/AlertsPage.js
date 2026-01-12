import BasePage from "./base/BasePage";
import { elements } from './Elements';
import {ROUTES} from "../../support/urls";

class AlertsPage extends BasePage{

    openAlertsPage() {
        super.open(ROUTES.ALERTS)
    }

    openWindowPage() {
        super.open(ROUTES.WINDOWS)
    }

    checkOpenedWindow() {
        cy.window().then((win) => {
            const openStub = cy.stub(win, 'open').as('openStub');
            cy.get(elements.tabButton).click().then(() => {
                cy.get(elements.openStub).should('be.called').and((stub) => {
                    const firstCallArgs = stub.getCall(0).args;
                    expect(firstCallArgs[0]).to.include('/sample');
                });
            });
        });
    }

    checkTheSimpleAlert() {
        cy.on('window:alert', (text) =>  {
            expect(text).to.equal('You clicked a button')
        });
        cy.get(elements.alertButton).click()
    }

    checkTheAlertWithWait() {
        cy.on('window:alert', (text) =>  {
            expect(text).to.equal('This alert appeared after 5 seconds')
        });
        cy.get(elements.timerAlertButton).click()
    }

    checkTheAlertWithChosen() {
        cy.on('window:alert', (text) =>  {
            expect(text).to.equal('Do you confirm action?')
        });
        cy.get(elements.confirmButton).click()
    }

    checkYesNoAlert() {
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Antonio');
        });
        cy.get(elements.promtButton).click();
        cy.get(elements.promptResult).should('contain', 'Antonio');
    }
}
export default new AlertsPage();
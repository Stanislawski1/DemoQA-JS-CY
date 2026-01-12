import BasePage from './base/BasePage';
import { elements } from './Elements';
import { ROUTES } from '../../support/urls';
import { accordianText } from '../../fixtures/DataStorage';

class AccordianPage extends BasePage{

    openAccordianPage() {
        super.open(ROUTES.ACCORDIAN)
    }

    checkOfFirstAccordian() {
        cy.contains('What is Lorem Ipsum?').should('be.visible')
        cy.get(elements.sectionOneContent).should('include.text', accordianText[0].textOne)
    }

    checkOfSecondAccordian() {
        cy.contains('Where does it come from?').should('be.visible').click()
        cy.get(elements.sectionTwoContent).should('have.text', accordianText[0].textTwo)
    }

    checkOfThreeAccordian() {
        cy.contains('Why do we use it?').should('be.visible').click()
        cy.get(elements.sectionThreeContent).should('have.text', accordianText[0].textThree)
    }
}
export default new AccordianPage();
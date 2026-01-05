class AcordianPage {


    openAccordianPage() {
        cy.visit('https://demoqa.com/accordian')
    }

    checkOfFirstAccordian() {
        cy.visit('https://demoqa.com/accordian')
        cy.contains('What is Lorem Ipsum?').should('be.visible').click()
        cy.get('section1Content').should('have.text', accordianText[0].textOne)
    }

    checkOfSecondAccordian() {
        cy.visit('https://demoqa.com/accordian')
        cy.contains('Where does it come from?').should('be.visible').click()
        cy.get('section1Content').should('have.text', accordianText[1].textOne)
    }

    checkOfThreeAccordian() {
        cy.visit('https://demoqa.com/accordian')
        cy.contains('Why do we use it?').should('be.visible').click()
        cy.get('section1Content').should('have.text', accordianText[2].textOne)
    }
}
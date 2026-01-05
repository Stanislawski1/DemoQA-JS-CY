class FramesPage {

    openFramesPage() {
        cy.go('https://demoqa.com/frames')
    }

    checkOfMainIFrame() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // возвращаем false, чтобы Cypress не валил тест из-за ошибок приложения
            return false;
        });
        cy.visit('https://demoqa.com/frames')
        cy.getIframeBody('#frame1', 'This is a sample page')
    }

    checkOfLittleIframe() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // возвращаем false, чтобы Cypress не валил тест из-за ошибок приложения
            return false;
        });
        cy.visit('https://demoqa.com/frames')
        cy.getIframeBody('#frame2', 'This is a sample page')
    }
}
export default class BasePage {
    step(message) {
        cy.log(`STEP: ${message}`);
        if (typeof cy.allure === 'function') {
            // Вызов через массив параметров — WebStorm тут бессилен что-то проверять
            const allure = cy.allure();
            allure['step'](message);
        }
    }

    open(path) {
        this.step(`Открытие страницы: ${path}`);
        cy.visit(path);
    }
}
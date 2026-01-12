import AlertsPage from '../pages/AlertsPage';

describe("Проверка алертов", () => {

    it('Опция: подмена window.open и проверка вызова', () => {
        AlertsPage.openWindowPage();
        AlertsPage.checkOpenedWindow();
    });

    it('Проверка стандартного алерта', () => {
        AlertsPage.openAlertsPage();
        AlertsPage.checkTheSimpleAlert();
    });

    it('Проверка алерта с ожиданием', () => {
        AlertsPage.openAlertsPage();
        AlertsPage.checkTheAlertWithWait();
    });

    it('Проверка алерта с выбором действия', () => {
        AlertsPage.openAlertsPage();
        AlertsPage.checkTheAlertWithChosen();
    });

    it('Prompt Alert: Ввод текста', () => {
        AlertsPage.openAlertsPage();
        AlertsPage.checkYesNoAlert();
    });
});
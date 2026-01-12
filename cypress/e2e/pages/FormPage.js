import BasePage from "./base/BasePage";
import {ROUTES} from "../../support/urls";

class FormPage extends BasePage{

    openPracticeFormPage() {
        this.step('Открытие страниц форм');
        super.open(ROUTES.PRACTICEFORM)
    }

    usePracticeForm(firstName, lastName, userEmail, userNumber, currentAddress, department) {
        this.step('Проверка использования practice form');
        const newUser = {
            firstName: firstName,
            lastName: lastName,
            userEmail: userEmail,
            userNumber: userNumber,
            currentAddress: currentAddress,
            department: department
        };
        cy.fillPracticeForm(newUser)
    }
}
export default new FormPage()
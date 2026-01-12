import BasePage from "./base/BasePage";
import {ROUTES} from "../../support/urls";

class FormPage extends BasePage{

    openPracticeFormPage() {
        super.open(ROUTES.PRACTICEFORM)
    }

    usePracticeForm(firstName, lastName, userEmail, userNumber, currentAddress, department) {
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
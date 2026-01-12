import FormPage from '../pages/FormPage';
import MainPage from '../pages/MainPage';

describe("Тестирование вкладки Form Page", () => {

    it('Проверка заполнения формы регистрации', () => {
        FormPage.openPracticeFormPage();
        FormPage.usePracticeForm(
            "Antonio", "Banderas",
            "Antonio@gmail.com", "3753337771986",
            'Spain', "AQA"
        );
    });
})
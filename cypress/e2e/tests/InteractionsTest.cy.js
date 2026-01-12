import InteractionsPage from "../pages/InteractionsPage";

describe("Проверка страницы интерактивных элементов", () => {
    
    it('Проверка функции DrugNDrop в списке', () => {
        InteractionsPage.openSortablePage()
        InteractionsPage.useDrugNDrop()
    });

    it('Проверка функции DrugNDrop в квадрате', () => {
        InteractionsPage.openSortablePage()
        InteractionsPage.useInteractiveDrugNDrop()
    });

    it('Проверка функции списка Selectable', () => {
        InteractionsPage.openSelectablePage()
        InteractionsPage.useSelectable('Cras justo odio')
    });

    it('Проверка функции сетки selectable', () => {
        InteractionsPage.openSelectablePage()
        InteractionsPage.useGridSelectable('One', 'Five', 'Nine', 'Seven', 'Three')
    });

    it('Проверка функции Resizable', () => {
        InteractionsPage.openResizablePage()
        InteractionsPage.useResizable()
    });
});
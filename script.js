// Знаходимо елементи на сторінці
const firstField = document.getElementById("num1");
const secondField = document.getElementById("num2");
const outSpan = document.getElementById("output");
const logList = document.getElementById("historyList");

// Основна функція розрахунку суми
function calculate() {
    // Отримуємо введені значення та переводимо в числовий тип
    const val1 = Number(firstField.value);
    const val2 = Number(secondField.value);

    // Обчислюємо результат
    const result = val1 + val2;

    // Показуємо результат на сторінці
    outSpan.textContent = result;

    // Створюємо елемент li для списку історії
    const historyItem = document.createElement("li");
    historyItem.textContent = `${val1} + ${val2} = ${result}`;

    // Додаємо запис у блок історії
    logList.appendChild(historyItem);
}

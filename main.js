const appData = {
    money: undefined,
    time: undefined,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

const moneyInput = document.getElementById('money');
const timeInput = document.getElementById('time');

moneyInput.addEventListener("change", function(event) {
    appData.money = event.target.value;
});

timeInput.addEventListener("change", function(event) {
    appData.time = event.target.value;
});

let expensesKey = prompt('Введите обязательную статью расходов в этом месяце');
let expensesValue = prompt('Во сколько обойдется?');

appData.expenses[expensesKey] = expensesValue;

alert(`Бюджет на один день: ${Number(expensesValue) / 30}`);

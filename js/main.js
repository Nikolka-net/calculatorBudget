'use strict';

let income = 500,
    mission = 100000,
    period = '6 month',
    money;

function moneyDepositExpenses() {


    function moneyPrompt() {

        let n = prompt('Ваш месячный доход?', '25000');

        if (!isNaN(parseFloat(n)) && isFinite(n) == true) {
            money = Number(n);
        } else {
            alert('Введите число');
            moneyPrompt();
        }
    }

    moneyPrompt();

    function addExpensesPrompt() {

        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        addExpenses = addExpenses.split(', ');
        console.log(addExpenses);//выводим в виде массива
    }

    addExpensesPrompt();



    let deposit = prompt('Есть ли у вас депозит в банке?', 'Да');

    if (deposit == 'Да') {
        deposit = Boolean(1);
    } else if (deposit == 'Нет') {
        deposit = Boolean(0);
    } else {
        alert('Введите корректное значение');
    }



    console.log(typeof deposit);
    console.log(typeof money);
    console.log(typeof income);

}

moneyDepositExpenses();

let addExpenses1 = Number(prompt('Какие обязательные ежемесячные расходы у вас есть?'));//расходы
let addExpenses2 = Number(prompt('Какие обязательные ежемесячные расходы у вас есть?'));
let spending1 = Number(prompt('Во сколько это обойдётся?'));
let spending2 = Number(prompt('Во сколько это обойдётся?'));

let budgetMonth = money - (addExpenses1 + addExpenses2 + spending1 + spending2);
console.log(budgetMonth);//доход за месяц

let destination = mission / budgetMonth;
console.log(Math.ceil(destination));//цель достигнута за n месяцев

let budgetDay = budgetMonth / 30;
console.log(Math.floor(budgetDay));//доход за день

if (budgetDay >= 800) {
    alert('Высокий уровень дохода');
} else if (budgetDay >= 300 && budgetDay < 800) {
    alert('Средний уровень дохода');
} else if (budgetDay >= 0 && budgetDay < 300) {
    alert('Низкий уровень дохода');
} else {
    alert('Что-то пошло не так');
}

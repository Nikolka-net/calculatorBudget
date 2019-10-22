'use strict';

let income = 500,
    mission = 'become frontend developer',
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

let addExpenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let addExpenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let spending1 = prompt('Во сколько это обойдётся?');
let spending2 = prompt('Во сколько это обойдётся?');

let proceeds = money - (addExpenses1 + addExpenses2 + spending1 + spending2);
console.log(proceeds);
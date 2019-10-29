'use strict';

let money;

let start = function () {
    do {
        money = prompt('Ваш месячный доход?', 30000);
        //console.log('money: ', money);
    }
    while (isNaN(money) || money === '' || money === null);
};
start();

//объект
let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function () {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'квартплата, интернет');
        appData.addExpenses = addExpenses.split(', ');
        appData.deposit = !!confirm('Есть ли у вас депозит в банке?');

        let
            addExpenses1,
            addExpenses2;

        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                addExpenses1 = prompt('Какие ежемесячные расходы у вас есть?', 'телефон');
            }

            if (i === 1) {
                addExpenses2 = prompt('Какие ежемесячные расходы у вас есть?', 'питание');
            }

            appData.expenses = { [addExpenses1]: addExpenses2, [addExpenses2]: addExpenses1 };

        }

    },

};
appData.asking();
//console.log(appData);

//Function

function getExpensesMonth() {
    let spending;

    for (let i = 0; i < 2; i++) {

        do {
            spending = prompt('Во сколько это обойдётся?', '3000');
            appData.expensesMonth += +spending;
        }
        while (isNaN(spending) || spending === '' || spending === null);

    }
    console.log('Расходы за месяц: ' + appData.expensesMonth);
}

appData.getExpensesMonth = getExpensesMonth;
appData.getExpensesMonth();


function getBudget() {
    appData.budgetMonth = money - appData.expensesMonth;//накопления за месяц(минус расходы)
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
}
appData.getBudget = getBudget;
appData.getBudget();


function getTargetMonth() {
    if (appData.budgetMonth > 0) {

        appData.period = Math.floor(appData.mission / appData.budgetMonth);//расчёт периода достижения цели

        console.log('Цель будет достигнута за ' + appData.period + ' месяца(ев)');//вывод срок достижения цели

        return appData.period;
    } else {
        console.log('Цель не будет достигнута');//вывод срок достижения цели
    }
}
appData.getTargetMonth = getTargetMonth;
appData.getTargetMonth();

function getStatusIncome() {
    if (appData.budgetDay >= 800) {
        return ('Высокий уровень дохода');
    } else if (appData.budgetDay >= 300 && appData.budgetDay < 800) {
        return ('Средний уровень дохода');
    } else if (appData.budgetDay >= 0 && appData.budgetDay < 300) {
        return ('Низкий уровень дохода');
    } else {
        return ('Что-то пошло не так');
    }
}
appData.getStatusIncome = getStatusIncome;
appData.getStatusIncome();
console.log(appData.getStatusIncome());

console.log('Наша программа включает в себя данные:');

for (let key in appData) {
    console.log(key);
    console.log(appData[key]);
}
















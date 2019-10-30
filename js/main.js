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
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function () {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'квартплата, интернет');
        appData.addExpenses = addExpenses.toLocaleLowerCase().split(', ');
        appData.deposit = !!confirm('Есть ли у вас депозит в банке?');

        for (let i = 0; i < 2; i++) {
            let spending;
            let addExpenses1,
                addExpenses2;

            if (i === 0) {
                addExpenses1 = prompt('Какие ежемесячные расходы у вас есть?', 'телефон');
                do {
                    spending = prompt('Во сколько это обойдётся?', '2000');
                }
                while (isNaN(spending) || spending === '' || spending === null);
                appData.expenses[addExpenses1] = spending;
            }

            if (i === 1) {
                addExpenses2 = prompt('Какие ежемесячные расходы у вас есть?', 'питание');
                do {
                    spending = prompt('Во сколько это обойдётся?', '3000');
                }
                while (isNaN(spending) || spending === '' || spending === null);
                appData.expenses[addExpenses2] = spending;
            }

        }
    },
    getExpensesMonth: function () {
        for (let key in appData.expenses) {
            appData.expensesMonth += +appData.expenses[key];
        }

    },
    getBudget: function () {
        appData.budgetMonth = appData.budget - appData.expensesMonth;//накопления за месяц(минус расходы)
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function () {
        if (appData.budgetMonth > 0) {

            appData.period = Math.floor(appData.mission / appData.budgetMonth);//расчёт периода достижения цели

            console.log('Цель будет достигнута за ' + appData.period + ' месяца(ев)');//вывод срок достижения цели

            return appData.period;
        } else {
            console.log('Цель не будет достигнута');//вывод срок достижения цели
        }
    },
    getStatusIncome: function () {
        if (appData.budgetDay >= 800) {
            return ('Высокий уровень дохода');
        } else if (appData.budgetDay >= 300 && appData.budgetDay < 800) {
            return ('Средний уровень дохода');
        } else if (appData.budgetDay >= 0 && appData.budgetDay < 300) {
            return ('Низкий уровень дохода');
        } else {
            return ('Что-то пошло не так');
        }

    },



};
//Object
appData.asking();
console.log(appData);

//Function


appData.getExpensesMonth();
console.log('Расходы за месяц: ' + appData.expensesMonth);
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();
console.log(appData.getStatusIncome());

console.log('Наша программа включает в себя данные:');

for (let key in appData) {
    console.log(key + ' : ' + appData[key]);
}
















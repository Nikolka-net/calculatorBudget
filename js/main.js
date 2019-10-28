'use strict';

let money;

let start = function () {
    do {
        money = prompt('Ваш месячный доход?', 30000);
        console.log('money: ', money);
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

        let sum = 0,
            addExpenses1,
            addExpenses2,
            spending;

        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                addExpenses1 = prompt('Какие ежемесячные расходы у вас есть?', 'телефон');
            }

            if (i === 1) {
                addExpenses2 = prompt('Какие ежемесячные расходы у вас есть?', 'питание');
            }

            do {
                spending = prompt('Во сколько это обойдётся?', '3000');
            }
            while (isNaN(spending) || spending === '' || spending === null);
            appData.expenses = {
                [addExpenses1]: addExpenses2,
                [addExpenses2]: addExpenses1
            };
            sum += +spending;
            appData.expensesMonth = sum;
        }
        return sum;

    },

};
appData.asking();
console.log(appData);
//Function

/* let addExpenses1,
    addExpenses2; */

/* function getExpensesMonth() {
    let sum = 0, spending;

    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            addExpenses1 = prompt('Какие ежемесячные расходы у вас есть?', 'телефон');
        }

        if (i === 1) {
            addExpenses2 = prompt('Какие ежемесячные расходы у вас есть?', 'питание');
        }

        do {
            spending = prompt('Во сколько это обойдётся?', '3000');
        }
        while (isNaN(spending) || spending === '' || spending === null);
        sum += +spending;
    }
    return sum;
}

appData.getExpensesMonth = getExpensesMonth;
appData.getExpensesMonth(); */


function getAccumulateMonth() {
    return money - appData.expensesMonth;//накопления за месяц(минус расходы)
}
appData.getAccumulateMonth = getAccumulateMonth;
appData.getAccumulateMonth();
console.log('накопления за месяц', appData.getAccumulateMonth());


function getTargetMonth() {
    if (appData.getAccumulateMonth() > 0) {

        appData.period = Math.floor(appData.mission / appData.getAccumulateMonth());//расчёт периода достижения цели

        console.log('Цель будет достигнута за ' + appData.period + ' месяца(ев)');//вывод срок достижения цели

        return appData.period;
    } else {
        console.log('Цель не будет достигнута');//вывод срок достижения цели
    }
}
appData.getTargetMonth = getTargetMonth;
appData.getTargetMonth();
//console.log('достижение цели', appData.getTargetMonth());

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





//console.log('Накопления за месяц: ' + appData.getAccumulateMonth());
//console.log('Период ' + appData.period + ' месяца');
//console.log(`Цель заработать ${appData.mission} рублей`);




//appData.budgetMonth = money - (appData.getExpensesMonth());
//console.log('Доход за месяц: ' + appData.budgetMonth);





/* let destination = appData.mission / appData.budgetMonth;
if (appData.budgetMonth > 0) {
    destination = Math.ceil(destination);
    console.log('Цель будет достигнута за ' + destination + ' месяца(ев)');//цель достигнута за n месяцев
} else {
    console.log('Цель не будет достигнута');//вывод срок достижения цели
} */

//appData.budgetDay = appData.budgetMonth / 30;
//appData.budgetDay = Math.floor(appData.budgetDay);
//console.log('Доход за день с учётом расходов: ' + appData.budgetDay + ' рублей');//доход за день





//console.log('Расходы за месяц: ' + appData.getExpensesMonth());



/* let periodAccumulate = 0;
let getPeriodAccumulate = function () {
    periodAccumulate = appData.period * appData.getAccumulateMonth;
};
getPeriodAccumulate();//все накопления за период  */

//console.log('Накопления за месяц: ' + appData.getAccumulateMonth);
//console.log('Накопления за период: ' + periodAccumulate);//накопления за период


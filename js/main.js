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
    mission: 30000,
    period: 3,
    budget: {
        money: ''
    },
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function () {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'квартплата, интернет');
        appData.addExpenses = addExpenses.toLowerCase.split(',');
        appData.deposit = !!confirm('Есть ли у вас депозит в банке?');
    },
    getExpensesMonth: function () {
        let spending,
            sum = 0,
            addExpenses1,
            addExpenses2;

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
    },
};


console.log('Период ' + appData.period + ' месяца');
console.log(`Цель заработать ${appData.mission} рублей`);


let spendingAmount = appData.getExpensesMonth();
console.log('spendingAmount: ', spendingAmount);


let budgetMonth = money - (spendingAmount);
console.log('Доход за месяц: ' + budgetMonth);

let destination = appData.mission / budgetMonth;
if (budgetMonth > 0) {
    destination = Math.ceil(destination);
    console.log('Цель будет достигнута за ' + destination + ' месяца(ев)');//цель достигнута за n месяцев
} else {
    console.log('Цель не будет достигнута');//вывод срок достижения цели
}

let budgetDay = budgetMonth / 30;
budgetDay = Math.floor(budgetDay);
console.log('Доход за день с учётом расходов: ' + budgetDay + ' рублей');//доход за день


let getAccumulateMonth = function () {
    return money - spendingAmount;//накопления за месяц(минус расходы)
};

let accumulatedMonth = getAccumulateMonth();

console.log('Расходы за месяц: ' + spendingAmount);

let getTargetMonth = function () {
    if (accumulatedMonth > 0) {
        appData.period = Math.floor(appData.mission / accumulatedMonth);//расчёт периода достижения цели
        console.log(`Цель будет достигнута за ${appData.period} месяца(ев)`);//вывод срок достижения цели
        return appData.period;
    } else {
        console.log('Цель не будет достигнута');//вывод срок достижения цели
    }
};
getTargetMonth();

let periodAccumulate = 0;
let getPeriodAccumulate = function () {
    periodAccumulate = appData.period * accumulatedMonth;
};
getPeriodAccumulate();//все накопления за период

//console.clear();//чистка консоли

/* let showTypeOf = function (data) {
    console.log(data, typeof (data));
};
showTypeOf(money);
showTypeOf(appData.income);
showTypeOf(appData.deposit); */

let getStatusIncome = function () {
    if (budgetDay >= 800) {
        return ('Высокий уровень дохода');
    } else if (budgetDay >= 300 && budgetDay < 800) {
        return ('Средний уровень дохода');
    } else if (budgetDay >= 0 && budgetDay < 300) {
        return ('Низкий уровень дохода');
    } else {
        return ('Что-то пошло не так');
    }
};

console.log(getStatusIncome());
console.log('Накопления за месяц: ' + accumulatedMonth);
console.log('Накопления за период: ' + periodAccumulate);//накопления за период
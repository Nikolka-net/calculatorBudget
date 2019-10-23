'use strict';

let mission = 100000,
    period = 5,
    money;

function getMoney() {
    let n = prompt('Ваш месячный доход?', 30000);
    if (!isNaN(parseFloat(n)) && isFinite(n) == true) {
        money = Number(n);
    } else {
        alert('Введите число!');
        getMoney();
    }
}
getMoney();

let income = 'Ремонт пк';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'квартплата, интернет');
addExpenses = addExpenses.split(', ');
console.log(addExpenses);
let deposit = !!confirm('Есть ли у вас депозит в банке?');

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

let addExpenses1 = prompt('Какие ежемесячные расходы у вас есть?', 'телефон');
let spending1 = +prompt('Во сколько это обойдётся?', '1000');

let addExpenses2 = prompt('Какие ежемесячные расходы у вас есть?', 'питание');
let spending2 = +prompt('Во сколько это обойдётся?', '2500');

console.log('Период ' + period + ' месяца');
console.log(`Цель заработать ${mission} рублей`);

let budgetMonth = money - (spending1 + spending2);
console.log('Доход за месяц: ' + budgetMonth);

let destination = mission / budgetMonth;
destination = Math.ceil(destination);
console.log('Цель будет достигнута за ' + destination + ' месяцев');//цель достигнута за n месяцев

let budgetDay = budgetMonth / 30;
budgetDay = Math.floor(budgetDay);
console.log('Доход за день с учётом расходов: ' + budgetDay + ' рублей');//доход за день

if (budgetDay >= 800) {
    alert('Высокий уровень дохода');
} else if (budgetDay >= 300 && budgetDay < 800) {
    alert('Средний уровень дохода');
} else if (budgetDay >= 0 && budgetDay < 300) {
    alert('Низкий уровень дохода');
} else {
    alert('Что-то пошло не так');
}
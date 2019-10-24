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
console.log('Цель будет достигнута за ' + destination + ' месяца(ев)');//цель достигнута за n месяцев



let budgetDay = budgetMonth / 30;
budgetDay = Math.floor(budgetDay);
console.log('Доход за день с учётом расходов: ' + budgetDay + ' рублей');//доход за день

let getExpensesMonth = function () {
  return spending1 + spending2;//сумма всех расходов
};

let getAccumulateMonth = function () {
  return money - getExpensesMonth();//накопления за месяц(минус расходы)
};

let accumulatedMonth = getAccumulateMonth();

console.log('Расходы за месяц: ' + getExpensesMonth());

let getTargetMonth = function () {
  period = Math.floor(mission / accumulatedMonth);//расчёт периода достижениея цели
  return period;
};
getTargetMonth();

let periodAccumulate = 0;
let getPeriodAccumulate = function () {
  periodAccumulate = period * accumulatedMonth;
};
getPeriodAccumulate();//все накопления за период

console.clear();//чистка консоли

let showTypeOf = function (data) {
  console.log(data, typeof (data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

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
console.log(`Цель будет достигнута за ${period} месяца(ев)`);//вывод срок достижения цели
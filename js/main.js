'use strict';

let mission = 100000,
  period = 5,
  income = 'Ремонт пк',
  money;

/* function getMoney() {
    let n = prompt('Ваш месячный доход?', 30000);
    if (!isNaN(parseFloat(n)) && isFinite(n) == true) {
        money = Number(n);
    } else {
        alert('Введите число!');
        getMoney();
    }
}
getMoney(); */

let start = function () {
  do {
    money = prompt('Ваш месячный доход?', 30000);
    console.log('money: ', money);
  }
  while (isNaN(money) || money === '' || money === null);
};
start();


let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'квартплата, интернет');
addExpenses = addExpenses.split(', ');
console.log(addExpenses);

let deposit = !!confirm('Есть ли у вас депозит в банке?');

console.log('Период ' + period + ' месяца');
console.log(`Цель заработать ${mission} рублей`);



// let spending1 = +prompt('Во сколько это обойдётся?', '1000');
// let spending2 = +prompt('Во сколько это обойдётся?', '2500');

let addExpenses1,
  addExpenses2;

let getExpensesMonth = function () {
  let sum = 0;


  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      addExpenses1 = prompt('Какие ежемесячные расходы у вас есть?', 'телефон');
    }
    if (i === 1) {
      addExpenses2 = prompt('Какие ежемесячные расходы у вас есть?', 'питание');
    }

    do {

      sum += +prompt('Во сколько это обойдётся?', '2500');
      console.log('sum: ', sum);
    }
    while (isNaN(sum) || sum === '' || sum === null);


  }

  return sum;
};
let spendingAmount = getExpensesMonth();


let budgetMonth = money - (spendingAmount);
console.log('Доход за месяц: ' + budgetMonth);

let destination = mission / budgetMonth;
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
    period = Math.floor(mission / accumulatedMonth);//расчёт периода достижения цели
    console.log(`Цель будет достигнута за ${period} месяца(ев)`);//вывод срок достижения цели
    return period;
  } else {
    console.log('Цель не будет достигнута');//вывод срок достижения цели
  }
};
getTargetMonth();

let periodAccumulate = 0;
let getPeriodAccumulate = function () {
  periodAccumulate = period * accumulatedMonth;
};
getPeriodAccumulate();//все накопления за период

//console.clear();//чистка консоли

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
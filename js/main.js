let money = 60000,
    income = 'Ремонт пк',
    addExpenses = '1200, 2500, 1000, 500',
    deposit = true,
    mission = 100000,
    period = 12;

console.log(typeof money);//тип данных
console.log(typeof income);
console.log(typeof deposit);

console.log(income.length);//длина строки

console.log('За период' + ' ' + period + ' ' + 'месяцев' + ' ' + 'цель заработать' + ' ' + mission + ' ' + 'рублей');

console.log(addExpenses.toLowerCase().split(', '));//нижний регистр, выводим строку в массив

let budgetDay = money / 30;

console.log(budgetDay);//результат
console.log(money % 30);//остаток
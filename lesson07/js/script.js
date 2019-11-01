'use strict';


//кнопка рассчитать
let buttonStart = document.getElementById('start');
console.log(buttonStart);

//2 кнопки плюс
let buttonIncome = document.getElementsByTagName('button')[0];
let buttonExpenses = document.getElementsByTagName('button')[1];
console.log(buttonIncome);
console.log(buttonExpenses);

//чекбокс депозит
let checkboxDeposit = document.querySelector('#deposit-check');
console.log(checkboxDeposit);

//возможные доходы
let inputAdditionalIncomeItem = document.querySelectorAll('.additional_income-item');
console.log(inputAdditionalIncomeItem);

//блоки result
let resultValue = document.querySelectorAll('.result-total');
/* let resultBudgetMonth = resultValue[0];
let resultBudgetDay = resultValue[1];
let resultExpensesMonth = resultValue[2];
let resultAdditionalIncome = resultValue[3];
let resultAdditionalExpenses = resultValue[4];
let resultIncomePeriod = resultValue[5];
let resultTargetMonth = resultValue[6]; */

console.log(resultValue);

//инпуты, оставшиеся поля

let expenses = document.querySelectorAll('.expenses-title');
let inputExpensesTitle = expenses[1];
let inputExpensesAmount = document.querySelector('.expenses-amount');
console.log(inputExpensesTitle, inputExpensesAmount);

let inputAdditionalExpensesItem = document.querySelector('.additional_expenses-item');
console.log(inputAdditionalExpensesItem);

let inputDepositAmount = document.querySelector('.deposit-amount');
let inputDepositPercent = document.querySelector('.deposit-percent');
console.log(inputDepositAmount, inputDepositPercent);

let inputTargetAmount = document.querySelector('.target-amount');
console.log(inputTargetAmount);

let inputPeriodSelect = document.querySelector('.period-select');
let inputPeriodSelectType = inputPeriodSelect.getAttribute('type');
console.log(inputPeriodSelect);
console.log(inputPeriodSelectType);
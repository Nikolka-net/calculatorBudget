'use strict';


//кнопка рассчитать
let buttonStart = document.getElementById('start');

//2 кнопки плюс
let buttonIncomePlus = document.getElementsByTagName('button')[0];
let buttonExpensesPlus = document.getElementsByTagName('button')[1];

//чекбокс депозит
let depositCheck = document.querySelector('#deposit-check');

//возможные доходы
let additionalIncomeItem = document.querySelectorAll('.additional_income-item');

//блоки result
let resultValue = document.querySelectorAll('.result-total');
let budgetMonthValue = resultValue[0];
let budgetDayValue = resultValue[1];
let expensesMonthValue = resultValue[2];
let additionalIncomeValue = resultValue[3];
let additionalExpensesValue = resultValue[4];
let incomePeriodValue = resultValue[5];
let targetMonthValue = resultValue[6];


//инпуты, оставшиеся поля

let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('.income-title');
let incomeAmount = document.querySelector('.income-amount');

let expenses = document.querySelectorAll('.expenses-title');
let expensesTitle = expenses[1];
let expensesAmount = document.querySelector('.expenses-amount');

let additionalExpenses = document.querySelector('.additional_expenses-item');

let inputDepositAmount = document.querySelector('.deposit-amount');
let inputDepositPercent = document.querySelector('.deposit-percent');

let inputTargetAmount = document.querySelector('.target-amount');

let inputPeriodSelect = document.querySelector('.period-select');
let inputPeriodSelectType = inputPeriodSelect.getAttribute('type');
'use strict';

//кнопки рассчитать, сбросить
const buttonStart = document.getElementById('start');
const buttonCancel = document.getElementById('cancel');

//2 кнопки плюс
const buttonIncomePlus = document.getElementsByTagName('button')[0];
const buttonExpensesPlus = document.getElementsByTagName('button')[1];

//чекбокс депозит
let depositCheck = document.querySelector('#deposit-check');//галочка для депозита
let depositAmount = document.querySelector('.deposit-amount');
let depositPercent = document.querySelector('.deposit-percent');
let depositBank = document.querySelector('.deposit-bank');//опции, выбор банка

//возможные доходы
let additionalIncomeItems = document.querySelectorAll('.additional_income-item');


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

let incomeItems = document.querySelectorAll('.income-items');
let incomeTitles = document.querySelectorAll('.income-title');
let incomeTitle = incomeTitles[1];


let incomeAmount = document.querySelector('.income-amount');

let expenses = document.querySelectorAll('.expenses-title');
let expensesTitle = expenses[1];
let expensesAmount = document.querySelector('.expenses-amount');
let expensesItems = document.querySelectorAll('.expenses-items');

let additionalExpensesItem = document.querySelector('.additional_expenses-item');


let targetAmount = document.querySelector('.target-amount');

let periodSelect = document.querySelector('.period-select');

let period = document.querySelectorAll('.period');
let periodAmount = document.querySelectorAll('.period-amount');

let newPeriodAmount = document.createElement('div');

period[0].removeChild(periodAmount[0]);//удаляем значение из period-select





const AppData = function () {
	this.income = {};
	this.incomeMonth = 0;
	this.addIncome = [];
	this.expenses = {};
	this.addExpenses = [];
	this.deposit = false;
	this.percentDeposit = 0;
	this.moneyDeposit = 0;
	this.budget = 0;
	this.budgetDay = 0;
	this.budgetMonth = 0;
	this.expensesMonth = 0;
};

AppData.prototype.start = function () {

	if (salaryAmount.value === '') {
		buttonStart.setAttribute('disabled', 'true');//откл. кнопку
		return;
	}
	let inputAllData = document.querySelectorAll('.data input[type = text]');//получаем левые инпуты
	inputAllData.forEach((item) => {
		item.setAttribute('readOnly', 'true');
	});
	depositCheck.disabled = true;
	depositBank.disabled = true;
	budgetDayValue.setAttribute('readOnly', 'true');
	buttonIncomePlus.disabled = true;
	buttonExpensesPlus.disabled = true;


	this.budget = +salaryAmount.value;
	this.deleteButtonStart();//удаляем кнопку "рассчитать", появляется "сбросить"
	this.getExpenses();
	this.getExpensesMonth();
	this.getIncome();
	this.getAddExpenses();
	this.getAddIncome();
	this.getInfoDeposit();
	this.getBudget();
	this.calcPeriod();
	this.getSelectPeriod();

	this.showResult();
};

AppData.prototype.showResult = function () {//показ результатов
	budgetMonthValue.value = this.budgetMonth;
	budgetDayValue.value = this.budgetDay;
	expensesMonthValue.value = this.expensesMonth;
	additionalExpensesValue.value = this.addExpenses.join(', ');//разбиваем на строку
	additionalIncomeValue.value = this.addIncome.join(', ');
	targetMonthValue.value = this.getTargetMonth();
};

AppData.prototype.deleteButtonStart = function () {
	buttonStart.style.display = 'none';
	buttonCancel.style.display = 'block';
};

AppData.prototype.addExpensesBlock = function () {//получение полей
	let cloneExpensesItem = expensesItems[0].cloneNode(true);
	expensesItems[0].parentNode.insertBefore(cloneExpensesItem, buttonExpensesPlus);
	expensesItems = document.querySelectorAll('.expenses-items');
	if (expensesItems.length === 3) {
		buttonExpensesPlus.style.display = 'none';
	}
};

AppData.prototype.addIncomeBlock = function () {
	let cloneIncomeItem = incomeItems[0].cloneNode(true);
	incomeItems[0].parentNode.insertBefore(cloneIncomeItem, buttonIncomePlus);
	incomeItems = document.querySelectorAll('.income-items');
	if (incomeItems.length === 3) {
		buttonIncomePlus.style.display = 'none';
	}
};

AppData.prototype.getExpenses = function () {//псевдомассив, перебор элементов 
	expensesItems.forEach((item) => {
		let itemExpenses = item.querySelector('.expenses-title').value;//получим значение элементов
		let cashExpenses = item.querySelector('.expenses-amount').value;
		if (itemExpenses !== '' && cashExpenses !== '') {
			this.expenses[itemExpenses] = cashExpenses;//присваиваем ключ и значение
		}

	});
};

AppData.prototype.getIncome = function () {//дополнительный доход
	incomeItems.forEach((item) => {
		let itemIncome = item.querySelector('.income-title').value;
		let cashIncome = item.querySelector('.income-amount').value;
		if (itemIncome !== '' && cashIncome !== '') {
			this.income[itemIncome] = cashIncome;
		}
	});

	for (let key in this.income) {
		this.incomeMonth += +this.income[key];//складываем дополн. заработок
	}
};

AppData.prototype.getAddExpenses = function () {
	let addExpenses = additionalExpensesItem.value.split(',');//передаём в массив через запятую

	addExpenses.forEach((item) => {
		item = item.trim();//очистка от пробелов
		if (item !== '') {
			this.addExpenses.push(item);//добавляем в массив
		}
	});
	this.addExpenses = this.addExpenses.map((item) => {
		return item[0].toUpperCase() + item.slice(1).toLowerCase();
	});
};

AppData.prototype.getAddIncome = function () {
	additionalIncomeItems.forEach((item) => {
		let itemValue = item.value.trim();//получаем значение с инпута, без пробелов
		if (itemValue !== '') {
			this.addIncome.push(itemValue);//передаём в массив
		}
	});
	this.addIncome = this.addIncome.map((item) => {
		return item[0].toUpperCase() + item.slice(1).toLowerCase();
	});
};

AppData.prototype.getExpensesMonth = function () {
	for (let key in this.expenses) {
		this.expensesMonth += +this.expenses[key];
	}
};

AppData.prototype.getBudget = function () {
	this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit) / 12;//накопления за месяц(минус расходы)
	this.budgetDay = Math.floor(this.budgetMonth / 30);
};

AppData.prototype.getTargetMonth = function () {
	return Math.ceil(targetAmount.value / this.budgetMonth);//расчёт периода достижения цели в месяцах
};

AppData.prototype.getInfoDeposit = function () {
	if (this.deposit) {
		this.percentDeposit = depositPercent.value;
		this.moneyDeposit = depositAmount.value;
	}
};

AppData.prototype.calcPeriod = function () {
	incomePeriodValue.value = this.budgetMonth * periodSelect.value;
};

AppData.prototype.getSelectPeriod = function () {
	newPeriodAmount.textContent = periodSelect.value;
	period[0].appendChild(newPeriodAmount);
	newPeriodAmount.setAttribute('style', 'color: #353a43');
	//incomePeriodValue.value = appData.budgetMonth * periodSelect.value;
};

AppData.prototype.getReset = function () {
	this.income = {};
	this.incomeMonth = 0;
	this.addIncome = [];
	this.expenses = {};
	this.addExpenses = [];
	this.deposit = false;
	this.percentDeposit = 0;
	this.moneyDeposit = 0;
	this.budget = 0;
	this.budgetDay = 0;
	this.budgetMonth = 0;
	this.expensesMonth = 0;

	let inputAll = document.querySelectorAll('input');
	inputAll.forEach((item) => {
		item.value = '';
		item.readOnly = false;
	});
	periodSelect.value = '0';
	newPeriodAmount.textContent = periodSelect.value;
	depositCheck.disabled = false;
	depositBank.disabled = false;
	depositBank.style.display = 'none';
	depositAmount.style.display = 'none';
	depositPercent.style.display = 'none';
	myData.deposit = 'false';
	depositCheck.checked = false;

	buttonIncomePlus.disabled = false;
	buttonExpensesPlus.disabled = false;
	buttonStart.style.display = 'block';
	buttonCancel.style.display = 'none';
};

const myData = new AppData();

//addEventListener
AppData.prototype.eventsListeners = function () {
	buttonStart.addEventListener('click', myData.start.bind(myData));//вызов функции старт
	buttonCancel.addEventListener('click', myData.getReset);
	buttonExpensesPlus.addEventListener('click', myData.addExpensesBlock);//вызов функции добавления полей
	buttonIncomePlus.addEventListener('click', myData.addIncomeBlock);//вызов функции добавления полей
	periodSelect.addEventListener('change', myData.getSelectPeriod);
	depositCheck.addEventListener('change', function () {//проверка депозита
		if (depositCheck.checked) {

			depositBank.style.display = 'inline-block';
			depositAmount.style.display = 'inline-block';
			myData.deposit = 'true';
			depositBank.addEventListener('change', function () {//если поставление галочка
				let selectIndex = this.options[this.selectedIndex].value;//вычисление % банка
				if (selectIndex === 'other') {//строка другой
					depositPercent.disabled = false;
					depositPercent.style.display = 'inline-block';
					depositPercent.value = '';
				} else {
					depositPercent.style.display = 'none';
					depositPercent.value = selectIndex;//берётся из % других банков
				}
			});
		} else {
			depositBank.style.display = 'none';
			depositAmount.style.display = 'none';
			depositAmount.value = '';
			myData.deposit = 'false';
		}
	});
};

AppData.prototype.eventsListeners();
console.log(myData);










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

//возможные доходы и расходы
let addIncomeItems = document.querySelectorAll('.additional_income-item');
let addExpensesItem = document.querySelector('.additional_expenses-item');//возможный расход


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



let targetAmount = document.querySelector('.target-amount');

let periodSelect = document.querySelector('.period-select');

let period = document.querySelectorAll('.period');
let periodAmount = document.querySelectorAll('.period-amount');

let newPeriodAmount = document.createElement('div');

period[0].removeChild(periodAmount[0]);//удаляем значение из period-select


class AppData {
	constructor() {
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
	}

	start() {

		if (salaryAmount.value === '') {
			buttonStart.setAttribute('disabled', 'true');//откл. кнопку
			return;
		}

		this.budget = +salaryAmount.value;
		this.getExpInc();
		this.getAddExpenses();//возможный расход
		this.getAddIncome();//возможный доход
		this.getExpensesMonth();//расход за месяц
		this.getInfoDeposit();
		this.getBudget();//накопления за месяц
		this.calcPeriod();
		this.getSelectPeriod();

		this.showResult();
		this.getBlock();
	}

	getBlock() {
		let inputAllData = document.querySelectorAll('.data input[type = text]');//получаем левые инпуты
		inputAllData.forEach((item) => {
			item.readOnly = true;
		});
		depositCheck.disabled = true;
		depositBank.disabled = true;
		budgetDayValue.setAttribute('disabled', 'true');
		buttonIncomePlus.disabled = true;
		buttonExpensesPlus.disabled = true;

		buttonStart.style.display = 'none';
		buttonCancel.style.display = 'block';
	}

	showResult() {//показ результатов
		budgetMonthValue.value = this.budgetMonth;
		budgetDayValue.value = this.budgetDay;
		expensesMonthValue.value = this.expensesMonth;
		additionalExpensesValue.value = this.addExpenses.join(', ');//разбиваем на строку
		additionalIncomeValue.value = this.addIncome.join(', ');
		targetMonthValue.value = this.getTargetMonth();
	}

	addExpensesBlock() {//получение полей
		let cloneExpensesItem = expensesItems[0].cloneNode(true);
		expensesItems[0].parentNode.insertBefore(cloneExpensesItem, buttonExpensesPlus);
		expensesItems = document.querySelectorAll('.expenses-items');
		if (expensesItems.length === 3) {
			buttonExpensesPlus.style.display = 'none';
		}
	}

	addIncomeBlock() {
		let cloneIncomeItem = incomeItems[0].cloneNode(true);
		incomeItems[0].parentNode.insertBefore(cloneIncomeItem, buttonIncomePlus);
		incomeItems = document.querySelectorAll('.income-items');
		if (incomeItems.length === 3) {
			buttonIncomePlus.style.display = 'none';
		}
	}

	getExpInc() {

		const count = item => {

			const startStr = item.className.split('-')[0];//получаем income
			const itemTitle = item.querySelector(`.${startStr}-title`).value;
			const itemAmount = item.querySelector(`.${startStr}-amount`).value;
			if (itemTitle !== '' && itemAmount !== '') {
				this[startStr][itemTitle] = itemAmount;
			}
		};
		incomeItems.forEach(count);
		expensesItems.forEach(count);

		for (let key in this.income) {
			this.incomeMonth += +this.income[key];//складываем дополн. заработок
		}
	}

	getAddExpenses() {
		let addExpenses = addExpensesItem.value.split(',');//передаём в массив через запятую

		addExpenses.forEach((item) => {
			item = item.trim();//очистка от пробелов
			if (item !== '') {
				this.addExpenses.push(item);//добавляем в массив
			}
		});
		this.addExpenses = this.addExpenses.map((item) => {
			return item[0].toUpperCase() + item.slice(1).toLowerCase();
		});
	}

	getAddIncome() {
		addIncomeItems.forEach((item) => {
			item = item.value.trim();//получаем значение с инпута, без пробелов
			if (item !== '') {
				this.addIncome.push(item);//передаём в массив
			}
		});
		this.addIncome = this.addIncome.map((item) => {
			return item[0].toUpperCase() + item.slice(1).toLowerCase();
		});
	}

	getExpensesMonth() {
		for (let key in this.expenses) {
			this.expensesMonth += +this.expenses[key];
		}
	}

	getBudget() {
		this.budgetMonth = (this.budget + this.incomeMonth + ((this.moneyDeposit * this.percentDeposit) / 12)) - this.expensesMonth;//накопления за месяц(минус расходы)
		this.budgetDay = Math.floor(this.budgetMonth / 30);

	}

	getTargetMonth() {
		return Math.ceil(targetAmount.value / this.budgetMonth);//расчёт периода достижения цели в месяцах
	}

	getInfoDeposit() {
		if (this.deposit) {
			this.percentDeposit = depositPercent.value;
			this.moneyDeposit = depositAmount.value;
		}
	}

	calcPeriod() {
		incomePeriodValue.value = this.budgetMonth * periodSelect.value;
	}

	getSelectPeriod() {
		newPeriodAmount.textContent = periodSelect.value;
		period[0].appendChild(newPeriodAmount);
		newPeriodAmount.setAttribute('style', 'color: #353a43');
		//incomePeriodValue.value = appData.budgetMonth * periodSelect.value;
	}

	getReset() {
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
			item.readOnly = false;
			item.value = '';
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
	}
	//addEventListener
	eventsListeners() {
		buttonStart.addEventListener('click', myData.start.bind(myData));//вызов функции старт
		buttonCancel.addEventListener('click', myData.getReset.bind(myData));
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
	}
}

const myData = new AppData();
myData.eventsListeners();
//console.log(myData);










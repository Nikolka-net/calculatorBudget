'use strict';

let getSimile = function () {
  let number1;
  let number2;

  number1 = prompt('Введите первое число', '88');
  while (isNaN(number1) || number1 === '' || number1 === null) {
    number1 = prompt('Введите первое число', '88');
  }

  number2 = prompt('Введите второе число', '97');
  while (isNaN(number2) || number2 === '' || number2 === null) {
    number2 = prompt('Введите второе число', '97');
  }

  if (number1 > number2) {
    console.log('Первое число больше второго');
  } else if (number1 < number2) {
    console.log('Второе число больше первого');
  } else {
    console.log('Числа равны');
  }

};

getSimile();


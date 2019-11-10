'use strict';

function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}

let body = document.querySelectorAll('body');

let domElement2 = new DomElement('.block', '100px', '400px', 'blue', '18px');//передаём аргументы

DomElement.prototype.newCreateElement = function () {
  let newElem;
  if (this.selector[0] === '.') {//проверяем на класс и идентификатор
    newElem = document.createElement('div');//создаём div
    newElem.classList.add(this.selector.slice(1));//вставляем класс
    body[0].insertBefore(newElem, null);//вставляем на страницу
  } else if (this.selector[0] === '#') {
    newElem = document.createElement('p');//создаём p
    newElem.setAttribute('id', this.selector.slice(1));//вставляем идентификатор
    body[0].insertBefore(newElem, null);
  }
  newElem.textContent = prompt('Введите текст');//добавляем текст
  newElem.style.cssText = `height:${this.height};width:${this.width};background:${this.bg};fontSize:${this.fontSize}`;//добавляем свойства
};

console.log('domElement2: ', domElement2);
domElement2.newCreateElement();






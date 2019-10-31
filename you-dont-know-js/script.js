'use strict';

//Порядок книг

let books = document.querySelectorAll('.books');
let book = document.querySelectorAll('.book');
books[0].insertBefore(book[1], book[0]);
books[0].insertBefore(book[4], book[3]);
books[0].insertBefore(book[2], null);


//Фон

let backgroundImage = document.querySelector('body');
backgroundImage.setAttribute('style', `background-image: url('./image/you-dont-know-js.jpg')`);


//3 заголовок

let titleBook = document.querySelectorAll('h2');
let linkBook = document.querySelectorAll('a');
titleBook[2].removeChild(linkBook[2]);

let newLinkBook = document.createElement('a');
newLinkBook.textContent = 'Книга 3. this и Прототипы Объектов';
titleBook[2].appendChild(newLinkBook);


//Убрал рекламу

let ad = document.querySelector('.adv');
ad.setAttribute('style', 'display: none');


//Порядок глав во второй и пятой книге

let ulBook = document.querySelectorAll('ul'),
  liBook = document.querySelectorAll('li');

ulBook[1].insertBefore(liBook[8], liBook[16]);
ulBook[1].insertBefore(liBook[12], liBook[10]);
ulBook[1].insertBefore(liBook[14], liBook[10]);

ulBook[4].insertBefore(liBook[38], liBook[41]);
ulBook[4].insertBefore(liBook[41], liBook[44]);
ulBook[4].insertBefore(liBook[45], liBook[39]);


//Глава 8 в книге 6

let newLiBook = document.createElement('li');
newLiBook.textContent = 'Глава 8: За пределами ES6';
ulBook[5].appendChild(newLiBook);
ulBook[5].insertBefore(liBook[56], null);





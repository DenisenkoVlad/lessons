'use strict'

console.log('Урок 1 (функції)');
console.log('Задача 4');
let showMassage;
if (2 > 1) {
	showMassage = function () {
		console.log('Повідомлення');
	}
};
showMassage();

console.log('Урок 2 (Масиви)');
console.log('Задача 2');
let users = ['Іван', 'Іштван'];
users.push('Оля');
console.log(users);
users.splice(1, 1, 'Петро');
console.log(users);
let userDel = users.splice(0, 1);
console.log(userDel);
users.unshift('Маша', 'Паша');
console.log(users);

console.log('Задача 3');
let names = ['Іван', 'Іштван', 'Оля'];
console.log(names);
let nameDel = users.splice(1, 1);
console.log(nameDel);

console.log('Задача 4');
let str = 'Іван,Іштван,Оля';
console.log(str);
let arrOne = str.split(',');
console.log(arrOne);

console.log('Урок 3 (DOM)');
console.log('Задача 1');
let elementOne = document.querySelector('.data-class');
console.log(elementOne.dataset.sayHi);

console.log('Задача 2');
let elementTwo = document.querySelector('ul');
let lastChild = elementTwo.lastElementChild.textContent;
console.log(lastChild);

console.log('Задача 3');
let elementThree = document.querySelectorAll('.like')
console.log(elementThree);

console.log('Урок 4 (розміри, координати)');
console.log('Задача 1');
const innerWidth = window.innerWidth;
console.log(innerWidth);
const clientWidth = document.documentElement.clientWidth;
console.log(clientWidth);
const scrollWidth = innerWidth - clientWidth;
console.log(`Ширина прокрутки сторінки: ${scrollWidth}px`);
// коротший запис, якщо, звісно, так можна?)))
// const scrollWidth = window.innerWidth - document.documentElement.clientWidth;

console.log('Задача 2 (код в JS)');
function setScrollDown() {
	window.scrollTo({
		top: 100,
		left: 0,
		behavior: "smooth"
	});
};
setTimeout(setScrollDown, 1000);

console.log('Задача 3');
const elemOne = document.querySelector('.elem1');
console.log(`Перший елемент це: ${elemOne.innerHTML}`);
const getCoordsOneX = elemOne.getBoundingClientRect().left;
const getCoordsOneY = elemOne.getBoundingClientRect().top;
console.log(`Координати першого елемента: x:${getCoordsOneX} y:${getCoordsOneY}`)
const elemTwo = document.querySelector('.elem2');
console.log(`Другий елемент це: ${elemTwo.textContent}`);
console.log(`Координати другого елемента: x:${elemTwo.getBoundingClientRect().left} y:${elemTwo.getBoundingClientRect().top}`)
const elemThree = document.querySelector('.elem3');
console.log(`Третій елемент це: ${elemThree.textContent}`);
console.log(`Координати Третього елемента: x:${elemThree.getBoundingClientRect().left} y:${elemThree.getBoundingClientRect().top}`)

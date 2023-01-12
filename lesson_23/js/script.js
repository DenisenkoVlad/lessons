'use strict'

console.log('Урок 3 (цикли)');
console.log('Задача 1 - While');
let whileNum = 1
while (whileNum < 6) {
	console.log(whileNum);
	whileNum++
}

console.log('Задача 1 - For');
for (let forNum = 1; forNum < 6; forNum++) {
	console.log(forNum);
}

console.log('Задача 3');
let num = 0;
while (num < 3) {
	console.log(`Число ${num}`);
	num++;
}

console.log('Задача 4');
first: for (let num = 0; num < 3; num++) {
	for (let size = 0; size < 3; size++) {
		console.log(size);
		if (size == 1) {
			break first;
		}
	}
}


console.log('Урок 4 (number)');
console.log('Задача 1');
let numOne = Math.round((1.005 + Number.EPSILON) * 100) / 100;
console.log(numOne);

console.log('Задача 2');
let valueParse = '135.38px';
console.log(parseFloat(valueParse));

console.log('Задача 3');
let valueNan = 58 + "Фрілансер";
if (isNaN(valueNan)) {
	console.log('Результат NaN');
}

console.log('Задача 4');
console.log(Math.max(10, 58, 39, -150, 0));

console.log('Задача 5');
let valueFloor = 58.858;
console.log(Math.floor(valueFloor));


console.log('Урок 5 (string)');
console.log('Задача 2');
let text = 'фрілансер';
console.log(text[5]);

console.log('Задача 4');
console.log(text.toUpperCase());

console.log('Задача 5');
console.log(text.slice(3, 6));
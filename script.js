'use strict'
// use strict выдаст ошибку в следующем примере
// a = 5;
// console.log(a);

console.log(leftBorderWidth);
//В консоли underfind - переменная создана, но она пока не имеет никакого значения
//С let выведется ошибка

var leftBorderWidth = 1; 
let second = 2; 
const pi = 3.14;

// Типы данных
var number = 5; //Число (целое или дробное)
var string = "Hello"; //Строка
var sym = Symbol(); //Символ
var boolean = true; //Логическое значение
null; //null - не существует в коде
undefined; //undefined - объект существует, но не имеет значения
var obj = {}; //объект

console.log(4/0); //Infinity
console.log('string'*9); //NaN

let persone = { //Создали объект
    name: "John",
    age: 25,
    isMarried: false
};

console.log(persone.name);
console.log(persone["age"]);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp']; //Массив

console.log(arr[1]);

//alert('Hello World!');

// let answer = confirm('Are you here?');
// console.log(answer);

//let answer = prompt("Есть ли вам 18?", "Да"); //Значение по умолчанию = "Да"
//console.log(typeof(answer)); //Тип данных
console.log(typeof(arr)); //Тип данных
console.log(typeof(null)); //object, хотя это отдельный тип данных (ошибка JS)

console.log("arr" + " - object");
console.log(4 + " - number"); // Если перед string поставить +, то она обратится в number

console.log(typeof(+"it's a number"));

let incr = 10,
    decr = 10;

// Сначала изменяется, потом выводится
// console.log(++incr);
// console.log(--decr);   

// Сначала выводится, потом изменяется
// console.log(incr++);
// console.log(decr--);   

console.log(5%3); //Остаток от деления

console.log("2" == 2);
console.log("2" === 2);

console.log(true && false); // Логическое И
console.log(true || false); // Логическое И
console.log(!true); // Логическое НЕ

let num = 4;

if (num < 49) {
    console.log("Число меньше 49!")
} else if (num > 100){
    console.log("Ваше число больше 100!")
} else {
    console.log("Ваше число в диапазоне от 50 до 100!")
};
// Тернарный оператор
//(num == 50) ? console.log('Верно!') : console.log('Неверно!');


switch (num) {
    case 1:
        console.log("Число равно 1!");
        break;
    case 2:
        console.log("Число равно 2!");
        break;
    case 3:
    case 4:    
        console.log("Число равно 3 или 4!");
        break; 
    default:
        console.log("Число не 1, не 2, не 3, не 4!"); 
        break;  

};

// while (num < 10) {
//     console.log(num);
//     num++;
// };

//То же самое, но мы сначала делаем, потом проверяем
// do {
//     console.log(num);
//     num++;
// }
//while (num < 10);

for (let i = 1; i <= 10; i ++) {
    if (i == 6){
        continue //Таким образом мы пропустили 6
    }
    console.log(i)
}
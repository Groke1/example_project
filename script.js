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

// Функции

// function showFirstMessage(text) {
//     alert(text);
//     let locNum= 25; //Локальная переменнная
// };
// showFirstMessage("Hello World!");
// console.log(locNum); //Будет ошибка

// let glNum = 20;

// function showFirstMessage(text) {
//     alert(text);
//     let glNum = 10;
//     console.log(glNum); // Выведется 10 (это другая, локальная переменная)
// };

// showFirstMessage("Hello World!");
// console.log(glNum); // Выведется 20 (это глобальная переменная)

function calc(a, b) {
    return (a + b)
};

console.log(calc (30, 20));

function retVar() {
     let num = 40;
     return num;
};

let anotherNum = retVar();
console.log(anotherNum);

/* Синтаксис, который мы использовали называется Function Declaration.
Такую функцию можно вызывать до ее объявления */

sayHi();

function sayHi() {
    console.log("Hi!");
};

//Function Expression (функция создается только тогда, когда код до нее доходит)

//console.log(calc2(15, 20)); // Ошибка

let calc2 = function(a, b) {
    return (a + b);
};

console.log(calc2(15, 20));

//То же самое, но немного по-другому

let calc3 = (a, b) => a + b;
console.log(calc3(14, 18));

let str = "Test - test - test";
console.log(str.length); // Длина строки

console.log(str.toUpperCase()); // Строку в верхний регистр
console.log(str.toLowerCase()); // Строку в нижний регистр

let twelve = "12.2";

console.log(Math.round(twelve)); // Округление

let thirteen = "13.2px";
console.log(parseInt(thirteen)); // Отбрасывает дробную часть
console.log(parseFloat(thirteen)); // Убирает px

let seven = "7";
console.log(parseInt('17', 8)); //Переводит в 10-ую систему 17 с основанием 8

function firstFunc() {
    // Что-то делает
    setTimeout( function() {
        console.log(1);
    }, 500 );
}

function secondFunc() {
    console.log(2);
};

firstFunc();
secondFunc();

/* Но сначала выводится 2, а потом 1 (вторая функция сработала быстрее).
Если мы хотям, чтобы вторая функция сработала только после первой, 
мы должны ее задать, как callback-функцию*/

function learnJS(lang, callback) {
    console.log("Я учу " + lang);
    callback();
}

// learnJS("JavaScript", function() {
//     console.log("Я прошел 3й урок!")
// });

function done() {
    console.log("Я прошел 3й урок!")
}

learnJS("JavaScript", done);

let options ={
    width: 1024,
    height: 1024,
    name:"test"
};

console.log(options.name); // Вывели значение, которое соответствует ключу name
options.bool = false; // добавили пару "ключ-значение"
options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool; // Удаляем пару "ключ-значение"

console.log(options);

for (let key in options) {
    console.log("Свойство " + key + " имеет значение " + options[key]);
};

console.log(Object.keys(options).length); // Кол-во пар "ключ-значение"

let array = ["first", 2, 3, "four", 5];

array.pop(); // Удаляем последний элемент массива
array.push("5"); // Добавляем элемент в конец массива
array.shift(); // Удаляет первый элемент массива
array.unshift ("1"); //Добавляем элемент в начало массива

// array[99] = 99; // Задаем 99 элемент массива
// // Между 5-м и 99-м элементом ничего нет
// // Так не стоит делать

// console.log(array.length); // Получим 100

// console.log(array)

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }

array.forEach(function(item, i, array2) {
    console.log(i + ': ' + item + " (массип: " + array2 + ")");
});

console.log(array);
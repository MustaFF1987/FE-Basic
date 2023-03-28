// console.log("Hello World!");

// -----------------------------

// let num = 4;
// let name = 'Pavel';

// if (){

// let last_name = "Judakov"

// }

// -----------------------------

// let num = 4;
// num = 5;

// -----------------------------Постоянные переменные

//Constant variables
// const pi = 3.14;

// -----------------------------Правила написания

//camel case
// let FirsName = 'Pavels';

//snake case
// let last_name  = 'Judakovs';

// -----------------------------

// let greeting = "Hello JavaScript";

// console.log(greeting);

// -----------------------------

// выводит форму для ввода с заголовком и хначением по умаолчанию (title, number)

// let result = prompt('Enter the number', 0);
// console.log(result); 

// ----------------------------- Переменные

//Varialbles type (8)

// number
// string
// boolean - true - false
// undefined
// bigint - big numbers
// symbol
// null - empty results (not a number)
// object - lists, arrays, etc..

// ----------------------------- Числа

// let number1 = 123;
// let number2  = 12.345;
// Nan , infinity, -infinity (not a number - NaN)

// console.log(-1/0); -infinity
// console.log(1/0); infinity
// console.log(two/0); NaN

// console.log(12 + 3); сложение
// console.log(12 - 3); вычитание
// console.log(12 / 3); деление
// console.log(12 * 3); умножение
// console.log(11 % 2); остаток от деления 1
// console.log(2 ** 3); два в 3 степени


// ----------------------------- Строки (String)

// let name1 = 'Pavel'; - нет разницы в каких кавычках
// let name2 = "Pavel"; - нет разницы в каких кавычках
// let name3 = `Pavel`; - нет разницы в каких кавычках

// Конкатинация (склеивание строк)

// let first_name = 'Pavel';
// let last_name = "Judakov";

// console.log(first_name + last_name);
// console.log(last_name + first_name);
// console.log(last_name + ' ' + first_name);

// console.log("Pavel's book");

// let age = 35;

// I'm 35

// console.log("I'm " +  35);

//Hello, my name is ______. I'm_______;

// let name1 = prompt("What's your name?");
// let age = prompt("How old are you?");

// конкатинация
// console.log("Helo my name is " + name1 + ". I am " + age); 

// интерпаляция
// console.log(`Hello, my name is ${name1}. I'm ${age}.`);

// let r = 12;
// let g = 34;
// let b = 14;

// конкатинация
// console.log("rgb (" + r + ", " + g + ", " + b + ")");

// интерпаляция
// console.log(`rgb(${r}, ${g}, ${b})

// ----------------------------- 

// let num = true;
// console.log(typeof(num));

// let age = prompt("How old are you"); // prompt всегда возвращает строку
// console.log(typeof(age));

// ----------------------------- Преобразование

// let num1 = +prompt ("Enter the number"); Не явный метод
// let num1 = Number(prompt ("Enter the number")); Явный метод

// let pow = Number(num1) ** 2;
// let pow = +num1;

// console.log(pow);

// let num2 = 123;
// console.log(String(num2));

// ----------------------------- Логика JS

// console.log('3' + 3);  - результат 33 Конкатинация только в случае сос ложением

// console.log(+'3' + 3);  - результат 6  - не явное преобразование строки

// console.log('9' / 3); результат 3
// console.log('jnwkx' / 3); результат NaN

//  console.log('9' * 3); результат 27
//  console.log('jnwkx' * 3); результат NaN

//  console.log('9' - 3); результат 6
//  console.log('jnwkx' - 3); результат NaN

// Задача: Написать программу, которая считывает два числа (объявляем две переменные и записываем туда результат работы двух вызовов  prompt) и выводит их сумму. Не забудьте преобразовать полученные значения в число.

// let num1 = Number (prompt('Enter the number'));
// let num2 = Number (prompt('Enter the number'));
// let sum = num1+ num2;

// console.log(sum);

//------------------------------------Объекты

// let user = {
    
//     name: "John",
//     age: 30,
//     "likes car": true
// }

// проверяем существует ли такое свойство в объекте
// console.log('likes car' in user );

// console.log(user);
// console.log(user.name);

// // добавляем свойство в объект

// user.isAdmin = true;

// console.log(user);

// // удаляем свойство из объекта

// // delete user.age;

// user.age = 40;

// console.log(user);
// console.log(user["likes car"]);

// user["likes birds"] = false;

// console.log(user);

// цикл for in

// for(key in object){

// }

// const никак не действуетн объекты

// const cars = {};

// for(let key in user){
// console.log(key);
// // можно писать и так console.log(user.key)
// console.log(user[key]);
// }


//------------------------------------

//   Напишите код, выполнив задание из каждого пункта отдельной строкой:

    // Создайте пустой объект user.
    // Добавьте свойство name со значением John.
    // Добавьте свойство surname со значением Smith.
    // Измените значение свойства name на Pete.
    // Удалите свойство name из объекта.


    // let user = {};

    // user.name = "John";
    // user.surname = "Smith";
    // user.name = "Pete";
    // delete user.name;   

    // console.log(user);


    //------------------------------------



    // let codes ={

    //     '49': 'Germany',
    //     '41': 'Swiss',
    //     '44': 'Great Britain',
    //     //...
    //     '1': 'USA'

    // };

    // for(let key in codes){
    //     // console.log(codes[key]);
    //     console.log(key);
    // };

    
    //------------------------------------
    // Делаем что бы вывод был такой же как и в объекте

    // let codes1 ={

    //     '+49': 'Germany',
    //     '+41': 'Swiss',
    //     '+44': 'Great Britain',
    //     //...
    //     '+1': 'USA'
    // };

    // for(let key in codes1){
    //     // console.log(codes[key]);
    //     console.log(+key);
    // };


    //------------------------------------

    // let numbers = [13, -15, 1, 12, 100, -24, 12, 50];

    // // если складываем
    // let sum = 0;

    // // если умножаем
    // let p = 1;

    // for(let i=0; i < numbers.length; i++){
    // sum = sum + numbers[i];
    // p = p * numbers[i];
    // }

    // console.log(sum);
    // console.log(p);


       //------------------------------------

    //    // Посчитать сумму зарплат в объекте

    //    let salaries = {
    //     John: 100,
    //     Ann: 160,
    //     Pete: 130
    //    }

    //    let sum = 0;

    //    for(let key in salaries){
    //     // console.log(salaries);
    //     sum = sum + salaries[key];
    //    }

    //    console.log(sum);


     //------------------------------------Функции

    //  // Создаем функцию
    //  function showMessage(){
    //     console.log('Hello');
    //  }

    //    // вызываем функцию
    //  showMessage();


   //------------------------------------Функции с параметрами

    //    function function_name(param){

    //    }

    // function showMessage(userName, age){
    //     console.log('My name is: ' + firstName + "I'm: " + userAge);
    // }

    // // showMessage(" Pavel ", 25);

    // let firstName = prompt("What's your name");

    // let userAge = prompt("How olde ae you");

    // showMessage(firstName, userAge);

    // showMessage(firstName);

     //------------------------------------Переменные

    //  let first_Name = 'Pete';

    //  function showMessage(){
    //     let first_name = 'John';
    //     console.log ('Hello ' + first_Name);

    //  }

    //  showMessage()

     //------------------------------------Функции с возвращением значения

//      function sum(num1, num2){
//         // let sum = num1 + num2;
//         // console.log(sum);
//         return num1 + num2; // return прекращение работы функции

//      }

//      let result = sum (3,7);

//     // 1ый вариант вывода значения
//     console.log(result);

//    // 2ой вариант вывода значения
//     console.log(sum(6,19));


//------------------------------------

// function checkAge(age){
// if(age >= 18){
//     return true;
//     }

//     else {

//     return false;
//     }

// }

// let age = +prompt('How are you');

// if(checkAge(age)){

//     console.log('Access granted');
// }
// else{
//     console.log('Access denied');
// }

//------------------------------------


// function min(a,b){
//     if(a > b){
//         return b;
//     }
//     return a;
// }

// console.log(min(2,3));
// console.log(min(2,2));
// console.log(min(2,-1));


//------------------------------------


// function number(num){
//     if(num % 2 == 0){
//         console.log('Четное число');
// }
// else{
//     console.log('Нечетное число'); 
// }
// }

// let number1 = Number(prompt('Enter the number'));

// number(number1);

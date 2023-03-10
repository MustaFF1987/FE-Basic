// let age = (prompt('How old are you'));

// if(age == 18){

// console.log('OK');

// }

//----------------------------------------

// let age2 = Number(prompt('How old are you 2'));

// if(age2 === 19){

// console.log('OK');

// }

//----------------------------------------

// let age = (prompt('How old are you'));

// if(age == 18){

// console.log('OK');

// }

// else{
//     console.log('Not OK');
// }


//----------------------------------------

// let num = (prompt('Enter the number'));

// if(num == 0){

// console.log('Equal zero');

// }

// else if(num > 0){
//     console.log('Number greater 0');
// }

// else {
//     console.log('Number less  0');
// }


//----------------------------------------

// let num1 = Number(prompt('Enter 1st number'));
// let num2 = Number(prompt('Enter 2nd number'));

// if(num1 > num2){

// console.log('1st number is greater than 2nd');
// console.log('Number 1: ' + num1);

// }

// else if(num1 < num2){
//     console.log('2nd number is greater than 1st');
//     console.log('Number 2: ' + num2);
// }

// else {
//     console.log('Numbers are equal');
//     console.log(num1 + ' = ' + num2);
// }


//----------------------------------------

// let num = Number(prompt('Enter your number'));
// let num = +prompt('Enter your number');

// if(num == 0){

//     console.log('Your numbers is equal O');
// }

// else if(num > 0){

// console.log('Your number is greater than 0');

// }

// else(num < 0)
// {
//     console.log('Your number is less than 0');
  
// }

//----------------------------------------Arrays


// let fruits = ['Apple','Orange','Banana'];

// console.log(fruits.length); // кол-во элементов

// console.log(fruits[0]);
// console.log(fruits[fruits.length - 1]);

// fruits.push('Kiwi'); //добавилт элемент в конец массива

// fruits.unshift('Mango'); //добавилт элемент в начало массива

// console.log(fruits); 

//----------------------------------------fill the rempty array
// let fruits = [];

// let fruit1 = prompt('Enter fruit 1');
// let fruit2 = prompt('Enter fruit 2');

// fruits.push(fruit1, fruit2);

// console.log(fruits);

//----------------------------------------Delete elements from the array

// let fruits = ['Apple','Orange', 'Mango', 'Banana'];

// // fruits.pop(); //удалить последний элемент массива

// // fruits.shift(); //удалить первый элемент массива

// fruits.splice(0,1);  //разделить массив (первое значение это индекс элемента, второе значение это сколько елементов мы хотим удалить)

// console.log(fruits);

//----------------------------------------Split array on two parts


// let fruits = ['Apple','Orange', 'Mango', 'Banana'];

// let fruits1 = fruits.splice(0, 2);

// fruits1.splice(1, 2); 

// console.log(fruits);

// console.log(fruits1);

//----------------------------------------

//  Задание:
// 1.	Создайте массив styles с элементами «Джаз» и «Блюз».
// 2.	Добавьте «Рок-н-ролл» в конец.
// 3.	Замените значение в середине на «Классика».  // array[0] = 'new';
// 4.	Удалите первый элемент массива и покажите его.
// 5.	Вставьте Рэп и Регги в начало массива.

// let styles = ['Джаз','Блюз'];

//     console.log(styles);

// styles.push('Рок-н-ролл'); 

//     console.log(styles);

// styles[1] = 'Классика';

//     console.log(styles);

// styles.shift();

//     console.log(styles);

// styles.unshift('Рэп, ' + 'Регги'); 

//     console.log(styles);

    //----------------------------------------

// Задание: Написать программу, в которой объявлен массив с 5 числовыми элементами. Программа должна заполнить новый пустой массив квадратами чисел из первого массива. 
// Пример: 
// Исходный массив [1, 4, 2, 5, 3]
// Итоговый массив [1, 16, 4, 25, 9]

    // let array = [1, 4, 2, 5, 3];
    
    // console.log(array);
    
    // array[0] = 1**2;
    // array[1] = 4**2;
    // array[2] = 2**2;
    // array[3] = 5**2;
    // array[4] = 3**2;

    // // let array = [array[0]**2, array[1]**2,, array[2]**2,array[3]**2, array[4]**2];

    // console.log(array);

     //----------------------------------------

    //  let num = 4;

    // //  console.log(num++); //постфикс выводит исхлдное число
    // //  console.log(num);   // выводит выводит +1
    //  console.log(++num);    //префикс выводит исхлдное число


      //----------------------------------------

    //   for(начало, условие, шаг)

    //   for(let num = 1; num <= 5; num++){
    //     console.log(num);
    //     if (num == 2){
    //         break;
    //     }
    //   }

    //----------------------------------------

    //   for(let num = 0; num < 5; num++){
    //     if(num == 2){
    //         continue;
    //     }
    //         console.log(num);
    //   }
       
 //----------------------------------------

    // let array = [1, 4, 2, 5, 3];
    // let pow = [];

    // for(let i = 0; i < array.length; i++){
    //   pow.push(array[i]**2);      
    // }

    // console.log(array);
    // console.log(pow);

    //----------------------------------------

    // let arr = [];

    // for(let i = 0; i < 5; i++);{
    // arr.push(Number(prompt('Enter the numer')));
    // }

    // console.log(arr);

      //----------------------------------------

      // let arr = [1, 0,-12,-24, 15, 0, -1];

      // for (let i = 0; i < arr.length; i++){
      // if (arr[i]>=0){
      //   console.log(arr[i]);
      //    }
      // }
      
    //----------------------------------------

    // for(let num = 10; num > 0; num--){
    //     console.log(num);

    // }

// let paragraph = document.querySelector('p');

// 1ый способ записи события

// paragraph.addEventListener('click', function(){alert('Hello')});

// События мыши:
// click – происходит, когда кликнули на элемент левой кнопкой мыши (на устройствах с сенсорными экранами оно происходит при  касании).
// contextmenu – происходит, когда кликнули на элемент правой кнопкой мыши.
// mouseover / mouseout – когда мышь наводится на / покидает элемент.
// mousedown / mouseup – когда нажали / отжали кнопку мыши на элементе.
// mousemove – при движении мыши.

// События на элементах управления:

// submit – пользователь отправил форму <form>.
// focus – пользователь фокусируется на элементе, например нажимает на <input>.

// Клавиатурные события:

// keydown и keyup – когда пользователь нажимает / отпускает клавишу.

// 2ый способ записи события

// paragraph.addEventListener('click',myFunction);
// paragraph.addEventListener('click',myFunction2);
// paragraph.addEventListener('mouseover',myFunction3);

// function myFunction(){
// alert('Hello World');
// }

// function myFunction2 (){
// alert('Hello is Thursday');
// }

// function myFunction3 (){
// alert('Tomorrow is Friday');
// }

// // удаление события

// paragraph.removeEventListener('mouseover', myFunction3);

//----------------------------------------------

// Кнопка выполняет действие

// let button = document.querySelector('.click');

// button.addEventListener('click',myFunction4);

// function myFunction4 (){
//     console.log('Tomorrow is Friday');
//     }


// элемент.addEventListener(событие, функция, useCapture);
// Первый параметр — тип события (например, "click" или "mousedown").
// Второй параметр — функция, которая будет вызываться при возникновении события.
// Третий параметр — логическое значение (true/false), определяющее следует ли отправить событие дальше ("всплывание") или нужно  закрыть это событие. Этот параметр необязателен.

//----------------------------------------------


// Задание: Переделать кнопку таким образом, чтобы при нажатии на нее в параграфе в интерфейсе значение увеличивалось на 1. В начале  рассмотрите процесс, при котором мы каждый раз считываем число из параграфа, меняем и записываем обратно, а потом переделайте  процесс так, чтобы значение хранилось в переменной, изменялось при клике и записывалось в параграф.

// длтнное не эффективное решение
// function onClick(){
//     document.querySelector('.num').innerText = Number(document.querySelector('.num').innerText) + 1;
// }


// let button = document.querySelector('.button_1');

// let num = document.querySelector('.num');

// function onClick (){

//     num.innerText = (Number(num.innerText)) + 1;

//     }

//     button.addEventListener('button_1',onClick);

//   -------------------------------------------------


// Написать программу, которая создает две кнопки и вешает на них событие нажатия. При нажатии на первую выводится в консоль  “минус”, а при нажатии на вторую ‘плюс’.


// let button1 = document.createElement('button');

//     button1.innerText = 'Plus';

//     button1.classList.add = ('Plus');

// let button2 = document.createElement('button');

//     button2.innerText = 'Minus';

//     button2.classList.add = ('Minus');

//     document.body.append(button1, button2);

//     let num = Number(prompt('Enter the number'));

//         function onClick1(){

//             console.log(num++);
            
//         }

//         function onClick2(){

//             console.log(num--);
                
//         }

//     button1.addEventListener('click', onClick1);

//     button2.addEventListener('click', onClick2);

         
//  ------------------------------------------------
      
// Работа со стилями в js

    // let button1 = document.createElement('button');

    // button1.innerText = 'Plus';

    // button1.classList.add = ('Plus');

    // button1.style.backgroundColor = 'black';
    // button1.style.color = 'white';
    // button1.style.width = '150px';
    // button1.style.height = '70px';

    // document.body.append(button1);

//  ------------------------------------------------

// Задание: Создать квадратный div с рамкой и при наведении курсора на него цвет div-а поменять на введённый пользователем цвет (все шаги сделать с помощью JS).

// let block = document.createElement('div');

// block.style.width = '100px';

// block.style.height = '100px';

// block.style.border = '5px solid black';

// block.style.backgroundColor = 'black';


// function myFunction(){    

//         let newcolor = (prompt('Enter the color'));
//         block.style.backgroundColor = newcolor;

//     }

// block.addEventListener('mouseover', myFunction);

// document.body.append(block);

//  ------------------------------------------------ 

// function first(){
//     setTimeout(() =>{
// console.log('1');
//     }, 500);
// }

// function second(){
//     console.log('2');
// }

// first();
// second();

//  ------------------------------------------------

// Call back function

// function myFunction(callback){
//     let a = [2,4,6];
//     let elem = document.querySelector('.num');
// callback(elem,a);
//     }

// function out(elem, arr){
//     elem.innerText = arr;

//     }

//     myFunction(out);
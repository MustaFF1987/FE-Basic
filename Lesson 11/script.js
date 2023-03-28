
// let paragraph = document.querySelector('p');

// дать объекту новый класс
// paragraph.className = 'paragraph1';

// let num = Number(prompt("Enter the number"));

// добавить класс эелементу
// paragraph.classList.add('paragraph1');

// if(num > 10){
//     // paragraph.classList.add('paragraph1');
//     paragraph.classList.remove('paragraph1')
// }

// проверяет наличие класса: если у элемента нет такого класса то он его добавляет (add) есть такой класс есть , то удаляет (remove)
// paragraph.classList.toggle('paragraph1')

// удалить класс у эелемента
// paragraph.classList.remove('paragraph1')

// проверяет наличие класса то выводит true или false

//------------------------------------------------------------------

// console.log(paragraph.contains('p1'));

// console.log(paragraph.className);

// console.log(paragraph.classList);

// console.log(paragraph.className);

// • elem.classList.add/remove("class") – добавить/удалить класс.
// • elem.classList.toggle("class") – добавить класс, если его нет, иначе удалить.
// • elem.classList.contains("class") – проверка наличия класса, возвращает true/false

//выводим все классы с помощью метода .classList и уикла for of  
// (classList является перебираемым, поэтому можно перечислить все классы при помощи for...of)

// let classes = paragraph.classList;
// for(let classname of classes){
//     console.log(classname);
// }

//------------------------------------------------------------------

// • node.append(...nodes or strings) – добавляет узлы или строки в конец node,
// • node.prepend(...nodes or strings) – вставляет узлы или строки в начало node,
// • node.before(...nodes or strings) – вставляет узлы или строки до node,
// • node.after(...nodes or strings) – вставляет узлы или строки после node,


// let div = document.createElement('div');
// div.classList.add('block1');
// div.innerText = 'Hello World';
// let paragraph = document.querySelector('p');
// paragraph.replaceWith(div);

// paragraph.before(div);


//------------------------------------------------------------------

// alert('Alert'); ----- // модальное окно с сообщением выскакивает на главной странице
// Понятие модальное означает, что пользователь не может
// взаимодействовать с интерфейсом остальной части страницы, нажимать на другие кнопки и т.д. до тех пор, пока взаимодействует с окно

//------------------------------------------------------------------

// for (let i = 0; i < 5; i++){
// let div = document.createElement('div');
// div.classList.add('block1');
// div.innerText = 'Hello World';
// document.body.append(div);
// if(i%2==0){
//     document.body.append(div);
// }else{
//     document.body.prepend(div);
//    }
// }

// Создайте функцию clear(elem), которая удаляет все элеименты с селекторами li, p, 

//--------------------------------------

// function clear(elem){
//     let elements = document.querySelectorAll(elem);
  
//     for(let list of elements){
//         list.remove();
//      }
// }

// clear('li');
// clear('p');


// Если хотим удалить li с какми то индексом

// for (let i = 0; i < elements.length; i++){
// if(i % 2 == 0){
//     elements[i].remove();
//     }
// }

//--------------------------------------

// Напишите скрипт для создания спискаю
// Для каждого пункта
// Запрашивайте содержимое пункта (тега <li>) у пользователя с помощью  Prompt 10 раз
// Слоздать элемент <li> и добавить в <ul>


// let list2 = document.querySelector('.list2');

// for(let i = 0; i < 5; i++){
// let data = prompt('Enter the text for list elements');
// let li = document.createElement('li');
// li.innerText = data;
// list2.append(li);
// }


//-----------------------------------------
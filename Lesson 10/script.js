// let elements = document.querySelectorAll('li')

// console.log(elements);

// console.log(elements[0].innerHTML);
// console.log(elements[0].innerText); 

//-----------------------------------

// for(let i = 0; i<elements.lengthL i++){  
// console.log(elements[i].innerText); // выводим все элементы с помощью for
// elements[i].innerText = list_text;
// console.log(elem.innerText); // выводим все элементы с помощью for of
// }

//-----------------------------------

// for(let elem of elements){
//     let list_text = prompt('Please enter the text');
//     elem.innerText = list_text;
// }

// let element = document.querySelector('.p3');

// console.log(element);

// element.innerText = 'New Text';

// element.innerHTML = '<a href="">Link</a>'

//-------------------------------------------------------

// Задача: Написать программу, которая находит параграф по классу и заменяет в нем текст на “привет”.


// let element = document.querySelector('.p1');
// let element2 = document.querySelector('.p2');

// console.log(element);

// element.innerText = 'Privet';
// element2.innerText = 'Pavel';

// element.innerHTML = '<a href="">Link</a>'

//  однострочный вариант кода замены текста в классе .p1
// document.querySelector(".p1").innerText = 'Privet2';


//-------------------------------------------------------

// Задача: Написать программу, которая находит параграфы и заменяет в каждом из них текст на  “привет”

// let paragraphs = document.querySelectorAll('p');

// for(let p of paragraphs){

// p.innerText = 'Hello';

// }


//-----------------------------------------------

// Задача: Написать скрипт, который находит параграфы и первым 3 параграфам меняет текст на указанные пользователем значения.

// let paragraphs = document.querySelectorAll('p');

// for (let i = 0; i < 3; i++){

//        let p_text = prompt('Enter the text');
//        paragraphs[i].innerText = p_text;

//        вариант без создания переменной
//        paragraphs[i].innerText = prompt('Enter the text');
    
// }


//-----------------------------------------------Работа с атрибутами

// let link = document.querySelector('a');

// link.innerText = 'Google';

// link.setAttribute('href', 'https://www.google.com/');

// link.setAttribute('target', '_blank');

// link.setAttribute('class' , 'class1, class2, class3')

// console.log(link.hasAttribute('href'));

// console.log(link.getAttribute('href'));

// console.log(link.removeAttribute('class'));


//-----------------------------------------------

// Задача: Написать скрипт, который находит все ссылки на странице и формирует массив со всеми адресами. В итоге этот массив необходимо вывести в консоль.

// let links = document.querySelectorAll('a');
// let links_array = [];

// for(let link of links){
//      links_array.push(link.getAttribute('href'));
// }

// console.log(links_array);


//-----------------------------------------------Работа с атрибутами IMG


// let image = document.querySelector('img');

// image.setAttribute('src', 'www.image.com');

// image.setAttribute('alt', 'Cat');


//-----------------------------------------------

// Задача: Написать скрипт, который находит картинки в блоке с классом main и первым 5 картинкам 
// меняет url на указанное значение.

// let images = document.querySelectorAll('.main>img');

// let url = 'https://nextsolar.lv/wp-content/uploads/2022/10/watt-power-black-430x430.png'

//1ый способ

// for (let i = 0; i < 5; i++){

//      images[i].setAttribute('src', url);

// }


//2ой способ

// let i = 0;
// for(let img of images){
// i++;
// img.setAttribute('src', url);
// if(i==6){
//     break;
// }

// }

//-----------------------------------------------
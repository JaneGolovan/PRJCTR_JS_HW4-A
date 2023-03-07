// 1. Задача на селектори:

// Для сторінки з вебінару (лінк на гіт) напишіть селектори для наступних елементів:

//     - для елементу з текстом 'Навігація по DOM дереву'

let navDOM = document.querySelector("#header-two");
console.log(navDOM);

//     - для першого елементу <section>
let firstElSec = document.getElementsByTagName("section")[0];
let finalSec = firstElSec.firstElementChild;
console.log(finalSec);

//     - для елементу списку з текстом 'Пункт 5'
let paragr5 = document.getElementsByTagName("li");
for (let i = 0; i < paragr5.length; i++) {
  if (paragr5[i].textContent == "Пункт 5") {
    console.log(paragr5[i]);
  }
}
//     - для елементу з класом 'hatredLevelBlock'

let hatredLevelBlock = document.getElementsByClassName("hatred-level-block")[0];
console.log(hatredLevelBlock);
//     Кожен селектор має бути унікальним (тобто всі мають бути створені за допомогою різних методів) і має бути присвоєний якійсь змінній.

//     Приклад:

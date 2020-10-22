'use strict';

const adv = document.querySelectorAll('.adv'),
      library = document.querySelectorAll('.books'),
      book = document.querySelectorAll('.book'),
      chapter = document.querySelectorAll('li'),
      bookName = document.querySelectorAll('a'),
      newChapter = document.createElement('li');

// 1-Восстановить порядок книг
book[0].before(book[1]);
book[5].after(book[2]);
book[3].before(book[4]);

// 2-заменить фон страницы
// новый фон так себе. я бы первоначальный оставила..
document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

// 3-Исправить заголовок в книге 3
bookName[4].textContent = 'Книга 3. this и Прототипы Объектов';

// 4-удалить рекламу
adv[0].remove();

// 5-Восстановить порядок глав во второй и пятой книге
chapter[9].after(chapter[2]);
chapter[3].after(chapter[6]);
chapter[6].after(chapter[8]);
chapter[50].after(chapter[48]);
chapter[53].after(chapter[51]);
chapter[47].after(chapter[55]);

// 6-в шестой книге добавить главу
newChapter.textContent = 'Глава 8: За пределами ES6';
chapter[25].after(newChapter);

// выводы в консоль для проверки
// console.log('adv: ', adv);
// console.log('library: ', library);
// console.log('book: ', book);
// console.log('chapter: ', chapter);
// console.log('bookName: ', bookName);

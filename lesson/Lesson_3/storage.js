// // Пример 1: Установка и получение значения из LocalStorage
// Установка значения в LocalStorage
// localStorage.setItem( 'username', 'John');
// localStorage.setItem( 'username2', 'Dima');
// localStorage.setItem( 'isLoggedIn', 'true');
// // Получение значения из LocalStorage
let storedUsername = localStorage.getItem( 'isLoggedIn');
console. log ('Значение из LocalStorage:', storedUsername) ;

// // Удаление
// // Удаление значения из LocalStorage
localStorage.removeItem( 'isLoggedIn');
// Проверка, что значение удалено
let storedUsername2 = localStorage.getItem ('isLoggedIn' );
console. log ('Значение из LocalStorage:', storedUsername2);


// // Очистка LocalStorage
// localStorage.clear()

// // Проверка что localStorage пустой
// console.log('localStorage:', localStorage);

// --- Счетчик посещений ---
// // Проверяем, есть ли значение счетчика в LocalStorage
// if (localStorage.getItem ('counter')) {
//     // Если значение счетчика уже есть, увеличиваем его на 1
//     let counter = parseInt (localStorage.getItem ('counter')) + 1;
//     localStorage.setItem( 'counter', counter.toString());
// }else {
//     // Если значение счетчика не существует, устанавливаем его в 1
//     localStorage.setItem('counter', '1');
// }

// // // Выводим значение счетчика в консоль
// console.log ('Счетчик посещений:', localStorage.getItem ('counter')) ;

// Проверяем, есть ли значение счетчика в LocalStorage

let counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;

// // Обновляем значение счетчика и сохраняем его в LocalStorage
const updateCounter = () => {
    counter++;
    localStorage.setItem( 'counter', counter.toString());
};
// // Выводим текущее значение счетчика на страницу
document.querySelector('.counter').textContent = counter;

document.querySelector('.increment').addEventListener('click', () => {
    updateCounter();
    document.querySelector('.counter').textContent = counter;
});
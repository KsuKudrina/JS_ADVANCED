// try{
//     undefined = 1;
// }catch {
//     console. log ( 'Что-то произошло');
// }finally {
//     console. log ( 'Отличный результат') ;
// }

// Пример: Работа с делением чисел
// function divideNumbers (a, b) {
//     try {
//         const result = a / b; // Попытка выполнить деление
//         if (isNaN( result)) {
//             throw new Error ( 'Результат не является числом') ;
//         }
//         console. log ( 'Результат деления:', result);
//     } catch (error) {
//         console.log('Ошибка деления:', error);
//     } finally {
//         console. log ( 'Операция деления завершена') ;
//     }
// }

// divideNumbers(10, 2);
// divideNumbers(10, 'f');


// Пользовательские ошибки
// Создание пользовательской ошибки
class CustomError extends Error {
    constructor (message) {
        super (message); // Вызов конструктора родительского класса (Error) с пере    сообщением
        this.name = 'CustomError'; // Установка имени ошибки
    }
}
function validateNumber (value) {
    if (typeof value != 'number') {
        throw new CustomError ( 'Значение должно быть числом'); // Выбрасывание    пользовательской ошибки с сообщением
    }
    console. log ( 'Валидация успешна');
}
try{
    validateNumber ('42'); // Проверка на число с передачей строки вместо числа
}catch (error) {
    if (error instanceof CustomError) { // Проверка, является ли ошибка экземпляр    пользовательской ошибки
        console.error ( 'Ошибка: ', error.message); // Вывод сообщения об ошибке
        console. log ('Тип ошибки: ', error.name); // Вывод имени ошибки
    } else {
        console.error('Произошла ошибка', error); // Вывод сообщения об ошибке по умолчанию
    }
}
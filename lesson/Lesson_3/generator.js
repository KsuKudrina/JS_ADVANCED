// Генератор для генерации последовательности чисел
function* numberGenerator() {
    let number = 1;

    while (true) {
        yield number;
        number++;
    }
}

// Создаем экземпляр генератора
const generator = numberGenerator();

//генерируем итератор, который будет возвращать следующее число при каждом вызове next();

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);




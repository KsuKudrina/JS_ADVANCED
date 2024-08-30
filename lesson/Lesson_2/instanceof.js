//Определение класса Animal
class Animal{
    constructor(name){
        this.name = name;
    }
}

// Определение класса Dog, который наследуется от класса Animal
class Dog extends Animal {
    bark() {
    console.log ("Woof!");
    }
}
    // Создание объектов
    const animal = new Animal ("Animal");
    const dog = new Dog ("Dog");

    // Проверка с помощью instanceof
    console.log (animal instanceof Animal); // Выводит true, так как animal является экземпляром класса Animal

    console.log(dog instanceof Animal); // Выводит true, так как dog является экземпляром класса Animal (наследуется от Animal)

    console.log(dog instanceof Dog); // Выводит true, так как dog является экземпляром класса Dog
    
    // Проверка на экземпляр родительского класса
    console. log(animal instanceof Dog); // Выводит false, так как animal не является экземпляром класса  Dog

    // Проверка на экземпляр несуществующего класса
    console. log (dog instanceof Cat); // Выводит false, так как класс Cat не существует
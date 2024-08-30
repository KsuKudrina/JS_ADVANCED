// Класс для управления библиотекой.

class Library {
    // приватное свойство для хранения списка книг
    #books = [];// Приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

    // Геттер allBooks, который возвращает текущий список книг.
    get allBooks(){
        return this.#books;
    }

    // метод для добавления книги
    addBook(title){
        try {
            if(this.#books.includes(title)){
                throw new Error(`Книга с названием ${title} уже существует`)
            }
            this.#books.push(title);
            return this.#books
        } catch (error) {
            console.error(error.message)
        }
    }

    // метод для удаления книги
    removeBook(title){
        try {
            if(!this.#books.includes(title)){
                throw new Error(`Книги с названием ${title} нет в списке`)
            }
            this.#books = this.#books.filter(function(titleEl) { return titleEl != title });
            return this.#books
        } catch (error) {
            console.error(error.message)
        }
    }

    // метод для получения информации о наличии книги.
    hasBook(title){
        if(this.#books.includes(title)){
            console.log(`Книга с названием ${title} есть в библиотеке`)        
        }else{
            console.log(`Книги с названием ${title} нет в библиотеке`) 
        }
    }

    // Конструктор
    // Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.
    constructor(books) {
        try {
            books.forEach(book => {
                if(this.#books.includes(book)){
                    throw new Error(`Есть дубликат книги ${book}`)
                }
                this.#books.push(book);
            });
            
        } catch (error) {
            console.error(error.message);
        }
    }
}

const books = ['book1', 'book2', 'book3', 'book2'];

const library = new Library(books);
library.addBook('book1')
library.addBook('book6')
console.log(library);

library.removeBook('book3')
library.removeBook('book10')
console.log(library);

library.hasBook('book4')


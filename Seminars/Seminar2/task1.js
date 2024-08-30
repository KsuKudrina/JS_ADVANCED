class BankAccount {
    
    // Приватное свойство для хранения баланса
    #balanse = 0;

    // constructor(initialBalance) Конструктор для инициализации начального баланса
    constructor(initialBalance){
        if (initialBalance < 0) {
            throw new Error('Отрицательный баланс')
        }
        this.#balanse = initialBalance;
    }

    // Геттер для получения текущего баланса
    get balance(){
        return this.#balanse
    }
    // Метод для внесения денег на счет
    deposit(amount){
        if (amount < 10) throw new Error ("Минимальна сумма для внесения 10 рублей");
        this.#balanse += amount;
        return this.#balanse
    }
    // withdraw(amount) Метод для снятия денег со счета
    withdraw(amount){
        if (this.#balanse < amount) throw new Error ("Недостаточно средств"); 
        this.#balanse -= amount;
        return this.#balanse
    }
    
}
    // Создаем новый банковский счет с начальным балансом 500

    let account = new BankAccount (500);
    account.balance = 2300;
    console. log(account.balance); // Выводит: 500
    account. deposit (200);
    console. log(account.balance); // Выводит: 700
    account.withdraw( 100);
    console. log(account.balance); // Выводит: 600


    

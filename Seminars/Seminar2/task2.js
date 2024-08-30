class User {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
class PremiumUser extends User{
    constructor(firstName, lastName) {
        super(firstName, lastName);
    }
    premiumAccount = null; 
    setPremiumAccount(){
       this.premiumAccount = new Date().setFullYear(new Date().getFullYear() + 1); 
    }
    
}
// создать RegularUser
class RegularUser extends User{
constructor(firstName, lastName) {
    super(firstName, lastName);
}
}
function getAccountInfo (user) {
    if (user instanceof PremiumUser){
        console.log(user.firstName, user.lastName,`Премиум аккаунт действителен до: ${new Date(user.premiumAccount).getFullYear()} года`?? 'Информация отсутствует');
        
    }else if(user instanceof RegularUser){
        console.log(user.firstName, user.lastName, 'пользователь без премиум аккаунта');
    }else{
        console.log(user.firstName, user.lastName, 'Тип пользователя не определен');
    }
// Премиум аккаунт действителен до такой-то даты или информация отсутствует
// пользователь без премиум аккаунта
// Тип пользователя не определен"
}
// Проверка

const user1 = new PremiumUser('Иван', 'Иванов');
user1.setPremiumAccount();

const user2 = new RegularUser('Валенитина', 'Сидорова');

const user3 = new User('john', 'Doa');
const user4 = new PremiumUser('gdhdh', 'jdshdhd'); 

getAccountInfo(user1);
getAccountInfo(user2);
getAccountInfo(user3);
getAccountInfo(user4);

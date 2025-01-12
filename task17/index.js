/*HomeTask 17.1*/
class Calculator {
    constructor(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;
    }
        add(number1, number2) {
           return number1 + number2;
        }
        subtract(number1, number2) {
            return number1 - number2;
        }
        multiply(number1, number2) {
            return number1 * number2;
        }
        divide(number1, number2) {
            return number1 / number2;
        }
}

const calc = new Calculator();

console.log(calc.add(5, 3)); // 8
console.log(calc.subtract(10, 4)); // 6
console.log(calc.multiply(3, 6)); // 18
console.log(calc.divide(8, 2)); // 4
/*HomeTask 17.2*/
class Coach {
    constructor(name, type, rating) {
        this.name = name;
        this.type = type;
        this.rating = rating;
    }
    displayInfo() {
        console.log(`Coach: ${this.name}, Specialization: ${this.type}, Rating: ${this.rating}`);
    }
}

const coach1 = new Coach("John Doe", "Fitness", 4.7);
const coach2 = new Coach("Alice Smith", "Yoga", 4.9);

coach1.displayInfo(); // "Coach: John Doe, Specialization: Fitness, Rating: 4.7"
coach2.displayInfo(); // "Coach: Alice Smith, Specialization: Yoga, Rating: 4.9"

/*HomeTask 17.3*/
class BankAccount {
    constructor(money) {
        this.money = money;
    }
    getBalance(){
        return this.money;
    }
    deposit(value){
       this.money += value;
    }
    withdraw(value){
        this.money -= value;
    }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000
account1.deposit(500);
console.log(account1.getBalance()); // 1500
account1.withdraw(200);
console.log(account1.getBalance()); // 1300
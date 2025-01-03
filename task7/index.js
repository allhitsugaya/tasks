/* HW 7.1*/
function totalSum() {
    let total = 0;

    function sum(number) {
        total += number;
        {
            return total;
        }
    }
    return sum;
}
let sumTop = totalSum();
console.log(sumTop(4));//4
console.log(sumTop(5));//9
console.log(sumTop(10));//19
console.log(sumTop(50));//69
/* HW 7.2*/
function multiTwo (x){
 return function (y){
     return x * y;
 };
}
console.log(multiTwo(5)(5));// отримаємо 25
/* HW 7.3*/
function printChoice() {
    let attempts = 0;
    while (attempts <= 10) {
        let input = prompt(`Enter number.`);
        let numInput = Number(input);
        if (isNaN(numInput)&& numInput < 100) {
            alert(`Введіть корректне значення`);
            continue;
        }
        else if(numInput > 100){
            console.log(`Ваше число `+ numInput);
            return;
        }
        else {
            alert(`Введіть конкретні значення число повинно бути більше 100`);
        }
        attempts++;
    }
    alert(`Ви використали всі свої спроби.`);
}
printChoice();//Визиваємо нашу функцію аби у нас був результат на html - сторінці

function printChoice() {
    let attempts = 10;

    while (attempts > 0) {
        let input = prompt(`Enter a number greater than 100.`);
        let numInput = Number(input);

        if (isNaN(numInput)) {
            alert(`Please enter a valid number.`);
            continue;
        }

        if (numInput > 100) {
            console.log(`Your number: ${numInput}`);
            return;
        }

        alert(`The number must be greater than 100. Try again.`);
        attempts--;
    }

    alert(`You've used all your attempts.`);
}

printChoice();

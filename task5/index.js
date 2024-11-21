/*HW 5.1.*/
let result = '';
for (let i = 20; i <= 30; i += 0.5) {
    result += i + ' ';
}
console.log(result.trim());


/*HW 5.2.*/
const dollar = 41
const euro = 43;
const bitcoin = 0.00000026;
let yourChoice = prompt("What would you like to convert");

switch (yourChoice) {
    case `dollar`:
        for (let i = 10; i <= 100; i+=10) {
            console.log(`Convert this to uah ${i * dollar}`);
        }
        break;
    case `euro`:
        for (let i = 0; i <= 100; i+=10) {
            console.log(`Convert this to uah ${i * euro}`);
        }
        break;
    case `bitcoin`:
        for (let i = 0; i <= 100; i+=10) {
            console.log(`Convert this to uah ${i * bitcoin}`);
        }
        break;
    default:
        console.log("We don`t have information about your money");
}
/*HW 5.3.*/
let Nnumb = prompt("please enter your N");
for (let i = 0; i*i <Nnumb; i++){
    console.log(i);
}
/*HW 5.4.*/
let digitalNum = prompt("What is your N?");
let i = 0;
let j = 0;

    while (i < digitalNum){
        i++;
        if (i % i !==0){
            console.log("Твоє число не є простим");
        }
        else{
            console.log("Твоє число є простим");
        }
    }
let con = confirm("Чи бажаєте ввести ще одне число?");
if (con !==false){
    let digitalNum1 = prompt("What is your N?");
    while (j < digitalNum1){
        j++;
        if (j % j !==0){
            console.log("Твоє число не є простим");
        }
        else{
            console.log("Твоє число є простим");
        }
    }
}
else {
}
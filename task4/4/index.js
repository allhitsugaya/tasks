
/*Hometask 4.1*/

const name = prompt("What is your name?");
alert(`Hello, ${name}! How are you?`);

/*Hometask 4.2*/

const Number0 = prompt("Please, enter your number" , "234");

if (Number0.length == 3){

    let digit1 = Number0[0];

    let digit2 = Number0[1];

    let digit3 = Number0[2];

    if (digit1 == digit2 && digit2 == digit3){

        alert("Всі числа рівні!")

    }

    else if(digit1 == digit2){

        alert("Перше та друге число рівні")

    }

    else if(digit2 == digit3){

        alert("Друге та третє число рівні")

    }

    else if(digit1 == digit3){

        alert("Перше та третє число рівні")

    }

    else{

        alert("Всі з чисел не рівні")

    }

}
/*Hometask 4.3*/

const yourYear = prompt("What is your year of birth?");

const yourCity = prompt("What is your city?");

const yourSport = prompt("What is your favourite sport?");

if (yourYear && !isNaN(Number(yourYear))) {

    const yourAge = 2024 - Number(yourYear);

    alert(`Your age is ${yourAge} years old!`);

}

if (yourYear == false) {

    alert("It is a pity that you did not want to enter your year(((");

}

else{

}

if (yourCity == "Kiev") {

    alert(`You live in Ukraine`);

} else if(yourCity == "London") {

    alert(`You live in England`);

} else if(yourCity == "Washington"){

    alert(`You live in U.S.A.`);

} else{

    if(yourCity == true){

        alert(`You live in that ${yourCity}`);

    }

    else{

        alert("It is a pity that you did not want to enter your city(((");

    }

}

if (yourSport === "Basketball") {

    alert(`Cool! You want to be like Michael Jordan.`);

} else if(yourSport === "Box") {

    alert(`Cool! You want to be like Mike Tyson.`);

} else if(yourSport === "BodyBuilding"){

    alert(`Cool! You want to be like Samson Dauda.`);

} else{

    if (yourSport === true) {

        alert(`Your favourite sport is ${yourSport}`);

    }

    else{

        alert("It is a pity that you did not want to enter your sport(((")

    }

}
/*Hometask 4.4*/
let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch (true) {
    case numOrStr === null:
        console.log('ви скасували')
        break;
        case numOrStr.trim() === '':
            console.log('Empty String');
            break;
            case isNaN(+numOrStr):
                console.log(' number is Ba_NaN')
                break;
                default:
                    console.log('OK!')

}
/*HW 6.1 */
const message = prompt('Enter yor string value');
const chars = prompt('Enter some chars for removing');


// тут знаходиться наша функція
function cutter(string, arr) {
    let replaceWord = message.replaceAll(chars, '');// message - переміна а для неї я застосував метод replace аби прибрати данні слова які ввів користувач.
    return replaceWord;
}

const result = cutter(message, chars);

alert(result);

/*HW 6.2 */
const array = [{}, 1, 2, 3, 4, 5, 6, 'string', null];

function calculateAverage(numbers) {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}
const result1 = array.filter(item => typeof item === 'number');

const average = calculateAverage(result1);
console.log("Average:", average);

//function foo(array) { просто который слайсит это просто метод когда мы знаем что у нас в массиве есть и знаем номер элемента.
//    if(array.filter((array) => array !== null )){
//        let array2 = array.slice(1,6);
//        return array2;
//    }
// else {
//     console.log(array);
//    }
// }
/*HW 6.3*/
const array1 = [1, 3, 4, 6, 2, 5, 7];
alert(`Ваш массив має такий вигляд ${array}`);
let changeArray = prompt(`Чи бажаєте щось змінити?`);
function removeElement(array1, item) {
    if (changeArray !== typeof 'object' && typeof changeArray !== 'null') {
        let deleteArray = array1.splice(changeArray, 1);
        return array1;
    } else {
        console.log(`Введіть значення корректні`)
    }
}
removeElement(array1, changeArray);
console.log(`Ваш елемент : ${array1}`);
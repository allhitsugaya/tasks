/*HW 6.1 */
const message = prompt('Enter yor string value');
const chars = prompt('Enter some chars for removing');


// тут знаходиться наша функція
function cutter(message, chars) {
    return message.replace(chars, '');
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
alert(`Ваш массив має такий вигляд ${array1}`);
function removeElement(array1, item) {
    const newArray = array1.filter(element => element !== item);
    return newArray;
}
const result2 = removeElement(array1, 3); // отримаємо массив [1, 4, 6, 2, 5, 7]
console.log(result2);
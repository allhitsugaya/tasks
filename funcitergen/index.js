// const id = Symbol('id');
//
// const obj = {
//     name: "Serhii",
//     [id]: '12345',
//     id: 2
// }
// console.log(obj);
// console.log(obj.id); //undefined
// console.log(obj[id]); //12345
// console.log(Object.keys(obj));

// const globalId = Symbol.for("id");
// const globalId2 = Symbol.for("id");
// console.log(globalId === globalId2);
// console.log(Symbol.keyFor(globalId));
//
// const obj = {
//     [Symbol.for('id')] : 1
// }
// console.log(obj[Symbol.for('id')]);

//Symbol example

// class Collection {
//     constructor() {
//         this.items = [];
//     }
//     [Symbol.iterator]() {
//         let i = 0;
//         let items = this.items;
//         return{
//             next() {
//                 return i < items.length ?{value: items[i++], done: false}:{done: true} ;
//             }
//         }
//     }
// }
// const collection = new Collection();
// collection.items.push(1, 2, 3);
// console.log(collection.items);
//
// for(const items of collection) {
//     console.log(items);
// }
//
// const obj ={
//     a: 1,
//     b: 2,
//     c: 3,
//     [Symbol.iterator](){
//         const entries = Object.entries(obj);
//         let i = 0;
//
//         return {
//             next() {
//                 if (i < entries.length) {
//                     const value = entries[i][1];
//                     i++;
//                     return {value, done: false};
//                 }
//                 return {done: true};
//             }
//         }
//
//     }
// }
// console.log(...obj);

//Function Generator

// function* foo() {
//     yield 1;
//     yield 2;
// }
// const iterator = foo()
//
// const lol = iterator.next();
// console.log(lol)
// console.log(iterator.next().value);

//examples

function* createId(){
    let i = 1;
    while(true) yield i++;
}

const idC = createId();

console.log(idC.next().value);
console.log(idC.next().value);
console.log(idC.next().value);
console.log(idC.next().value);
console.log(idC.next().value);

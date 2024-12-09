/*H.W. 10.1(Hillel task)*/
// const obj = {
//     name: 'Serhii',
//     age: `20`,
//     city: 'Odessa',
//     getInfo(){
//         console.log(` Name :${this.name}; Age:${this.age}; City:${this.city}`);
// }
// }
// console.log(obj.getInfo());
/*H.W. 10.1*/
function User(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

User.prototype.getInfo = function (User){
    return {
        name: this.name,
        age: this.age,
        city: this.city
    }
}

const user = new User(`Serhii`, `20`, `Odessa`);
console.log(user.getInfo());

/*H.W. 10.2*/
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getEnevNumbers(arr) {
   let doubl = arr.filter((arr) => arr % 2 === 0);
   return doubl;
}


const even = getEnevNumbers(arr);
console.log(even); // [2, 4, 6, 8]

/*H.W. 10.3(Hillel task)*/
const book = {
    contacts: [
        {
            name: "Serhii",
            phone: "+380999999999",
            email: "example@email.com",
        },
    ],
    find: function (name) {
        const contacts = this.contacts.find((contact) => contact.name === name);
        if (!contacts) {
            console.log(`Name dont exist`);
        }
        else{
            console.log(`Name: ${contacts.name}; Phone: ${contacts.phone}; Email: ${contacts.email}`);
        }
    },
    add: function (key, value) {
        this.contacts.forEach(contact => {
            contact[key] = value;
        })
    },
};
book.add('city', `Odessa` );
book.find(`Serhii`);
console.log(book.contacts);
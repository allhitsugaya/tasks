/* H.W. 9.1*/
const company = {
    sales: [
        { name: 'Jhon', salary: 1000 },
        { name: 'Alice', salary: 600 },
        { name: 'Bob', salary: 1200 }
    ],
    development: {
        web: [
            { name: 'Peter', salary: 2000 },
            { name: 'Alex', salary: 1800 },
            { name: 'Max', salary: 600 },
        ],
        internals: [
            { name: 'Jack', salary: 1300 }
        ]
    }
};

function totalSales(company) {
 let result = 0;
 for (let key in company) {
     if (Array.isArray(company[key])){
         result += company[key].reduce((total, employee)=> total + employee.salary , 0);
     }
     else if (typeof company[key] == "object"){
         result += totalSales(company[key]);
     }
 }
 return result;
}

const total = totalSales(company);
console.log(total);
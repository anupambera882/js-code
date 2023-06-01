/*
// reversr a number
let num = 1234567;
let rev_num = 0;

while (num > 0) {
    let rem = num % 10;
    rev_num = rev_num * 10 + rem;
    num = (num - rem) / 10;
}
console.log(rev_num);


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
for (let i = 0; i < arr.length; i = i + 2) {
    sum = sum + arr[i];
}
for (let i = 1; i < arr.length; i = i + 2) {
    sum = sum - arr[i];
}
console.log(sum);



let arr = [6, 9, 2, 5, 4, 1, 3, 7, 8];

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

for (const num of arr) {
    console.log(num + " ");
}



let arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        const element = arr[i][j];
        console.log(element);
    }
}


const mal = (number) => {
    return number * number;
}
const add = () => {
    console.log(mal(7));
}
add();

let arrobj = [
    { name: "manas", value: 5, lastName: "parmanik" },
    { name: "anupam", value: 6, lastName: "bera" },
]

const value = arrobj.map((data) => {
    data.obj1 = "mmm"
    return data;
});
console.log(value);

*/

const mycar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
};

function myFunc(theObject) {
    theObject.make = "Toyota";
}

// x gets the value "Honda"
const x = mycar.make;
console.log(x);

// the make property is changed by the function
myFunc(mycar);
// y gets the value "Toyota"
const y = mycar.make;
console.log(y);

/*

// factorial of a number
const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
};
console.log(factorial(7));


const numbers = [0, 1, 2, 5, 10];

const f = function (x) {
    return x * x * x;
};

function map(f, a) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
        result[i] = f(a[i]);
    }
    return result;
}

const cube = map(f, numbers);
console.log(cube);



function A(x) {
    function B(y) {
        function C(z) {
            console.log(x + y + z);
        }
        C(3);
    }
    B(2);
}
A(1); // Logs 6 (which is 1 + 2 + 3)


function outside() {
    const x = 5;
    function inside(x) {
        return x * 2;
    }
    return inside;
}

console.log(outside()(10)); // returns 20 instead of 10


// The outer function defines a variable called "name"
const pet = function (name) {
    const getName = function () {
        // The inner function has access to the "name" variable of the outer function
        return name;
    };
    return getName; // Return the inner function, thereby exposing it to outer scopes
};
const myPet = pet("Vivie");

console.log(myPet()); // Returns "Vivie"

const createPet = function (name) {
    
    let sex;

    const pet = {
        // setName(newName) is equivalent to setName: function (newName)
        // in this context
        setName(newName) {
            name = newName;
        },

        getName() {
            return name;
        },

        getSex() {
            return sex;
        },

        setSex(newSex) {
            if (
                typeof newSex === "string" &&
                (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
            ) {
                sex = newSex;
            }
        },
    };

    return pet;
};

const pet = createPet("Vivie");
pet.getName(); // Vivie

pet.setName("Oliver");
pet.setSex("male");
pet.getSex(); // male
pet.getName(); // Oliver


function multiply(a, b = 1) {
    return a * b;
}

console.log(multiply(5,6)); // 5



function multiply(multiplier, ...theArgs) {
    return theArgs.map((x) => multiplier * x);      
}   

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]


const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const a2 = a.map(function (s) {
  return s.length;
});

console.log(a2); // [8, 6, 7, 9]



const a3 = a.map((s) => s.length);

console.log(a3); // [8, 6, 7, 9]


// maps and operation 
const browser = new Map([
    ["chrome" , 2008],
    ["edge" ,2000],
    ["firefox" , 2010],
    ["safari" , 2000],
]);

browser.set("opera", 2007);

console.log(browser);

console.log(browser.get('opera'));

console.log(browser.size);

browser.delete('opera');

console.log(browser);

console.log(browser.has('edge'));


// error handaling 
function myFunction(value) {
    let x = value;
    try {
        if (x == "") throw "is empty";
        if (isNaN(x)) throw "is not a number";
        x = Number(x);
        if (x > 10) throw "is too high";
        if (x < 5) throw "is too low";
    }
    catch (err) {
        console.log(err);
    }
    finally {
        console.log(value);
    }
}

myFunction(7);



// arrow function
let squrt = (num) =>{
    return num*num;
}

console.log(squrt(9));


class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    details() {
        return ("My name is "+ this.name + " and\ni born in " + this.year);
    }
}
let myCar1 = new Car("anupam", 2000);
let myCar2 = new Car("manas", 1099);

console.log(myCar2.details());

*/



// let text = '{ "employees" : [' +
// '{ "firstName":"John" , "lastName":"Doe" },' +
// '{ "firstName":"Anna" , "lastName":"Smith" },' +
// '{ "firstName":"Peter" , "lastName":"Jones" } ]}';


// console.log(text);



// const obj = {
//     firstName: "anupam",
//     lastName: "bera"
// }

// let key = (object, val) => {
//     return Object.keys(obj).find(key => object[key] === val);
// }
// console.log(key(obj, 'bera'));



// // use of module 

// const hello = require("./module");

// hello.printName()


// // setTimeout demontration
// console.log("hello");

// setTimeout(function () {
//     console.log("This is me");
// }, 2000);


// const sum = (a,b,c) => {
//     console.log(a+b+c);
// }

// setTimeout(sum,1000,1,2,3);

// let a = setInterval(sum,3000,1,2,3);
// clearInterval(a);


// // callback 
// const students = [
//     {name : "anupam" , subject : "javaScript"},
//     {name : "manas" , subject : "java"}
// ];

// function enrollStudent(student , callback) {
//     setTimeout(function(){
//         students.push(student);
//         callback();
//     }, 3000);
// }


// function getStudent() {
//     setTimeout(function() {
//         students.forEach(function(student) {
//             console.log("student name is "+ student.name +" and subject is "+student.subject);
//         });
//     },1000);
// }


// let newStudent = {name : "sunny" , subject : "python"};

// enrollStudent(newStudent,getStudent);


// // Promise in javaScript

// let p1 = new Promise((resolve, reject) => {
//     console.log("promise is pending");
//     setTimeout(() => {
//         console.log("I am a promise and i am resolve");
//         resolve(true);
//     }, 5000);
// });

// let p2 = new Promise((resolve, reject) => {
//     console.log("promise is pending");
//     setTimeout(() => {
//         console.log("I am a promise and i am rejected");
//         reject(new Error("this is an error"));
//     }, 5000);
// });

// p1.then((value) => {
//     console.log(value);
// });

// // p2.catch((error) => {
// //     console.log("some error occurred in p2");
// // });

// p2.then((value) => {
//     console.log(value);
// }, (error) => {
//     console.log(error);
// });


// // Promise chaining

// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("resolve after 2 seconds");
//         resolve(56);
//     }, 2000);
// });

// p.then((value) => {
//     console.log(value);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("promise 3");
//         }, 2000);
//     })
// }).then((value) => {
//     console.log("We are done"); 
// });


// // Promise api

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("value 1");
//     }, 1000);
// });

// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(new Error("this an error"));
//     }, 1000);
// });

// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("value 3");
//     }, 1000);
// });

// let promiseAll = Promise.allSettled([p1,p2,p3]);
// promiseAll.then((value) =>{
//     console.log(value);
// })


// // fetch api

// let p = fetch("https://goweather.herokuapp.com/weather/Ny");
// p.then((response) => {
//     console.log(response.status);
//     console.log(response.ok);
//     return response.json()
// }).then((value2) =>{
//     console.log(value2);
// })


// const createTodo = async (todo) => {
//     let options = {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify(todo),
//     }
//     let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
//     let response = await p.json()
//     return response
// }

// const getTodo = async (id) => {
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
//     let r = await response.json()
//     return r
// }

// const mainFunc = async () => {
//     let todo = {
//         title: 'Harry2',
//         body: 'bhai2',
//         userId: 1100,
//     }
//     let todor = await createTodo(todo)
//     console.log(todor)
//     console.log(await getTodo(101))
// }

// mainFunc()

// // callback function
// function myDisplayer(something) {
//     console.log(something);
// }

// // callback calling function
// function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
// }

// myCalculator(5, 5, myDisplayer);


// promise in js

// function myDisplayer(some) {
//     console.log(some);
// }

// let myPromise = new Promise(function (resolve, reject) {
//     let x = 1;
//     if (x == 0) {
//         resolve("OK");
//     } else {
//         reject("Error");
//     }
// });

// myPromise.then(
//     function (value) {
//         myDisplayer(value);
//     },
//     function (error) {
//         myDisplayer(error);
//     }
// );

// let promise = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         resolve("waiting for executing.");
//     }, 3000);
// });

// promise.then((value) => {
//     console.log(value);
// });


// async function myDisplay() {
//     let myPromise = new Promise(function (resolve, reject) {
//         resolve("waiting for executing.");
//     });
//     let value = await myPromise;    
//     console.log(value);
// }

// myDisplay();



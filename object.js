// create empty object

// let details = {};

// create object
// let person = {
//     firstName: "ANUPAM",
//     lastName: "BERA",
//     age: 23,
//     eyeColor: "black"
// }
// console.log(person);

// add an properties in existing Object

// person.height = 5.9;
// console.log(person);


/*
// create a new JavaScript object using new Object(), and then adds 4 properties

const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

*/

/*
// VVI VVI For readability, simplicity and execution speed, use the object literal method 

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
}

// when copy a object then not create a new object pass the reference of the original object
const x = person;
x.age = 10;

console.log(person);

// access an Object value using name of a value pair


console.log(person.firstName + " is " + person.age + " years old.");

console.log(person["firstName"] + " is " + person["age"] + " years old.");

*/
/* 
const myObj = {
    name: "John",
    age: 30,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] }
    ]
}

let x = "";
for (let i in myObj.cars) {
    x += myObj.cars[i].name + "\n";
    for (let j in myObj.cars[i].models) {
        x += myObj.cars[i].models[j] + "\n";
    }
}

console.log(x);

let value = "";
for (const i in person) {
    value += person[i] + " ";
}


console.log(value);

*/


// Display a object 
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

const myArray = Object.values(person);

console.log(myArray);

let myString = JSON.stringify(person);

console.log(myString);

/*

// Constructor function for Person objects
function person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// Create 2 Person objects
const myFather = new person("John", "Doe", 50, "blue");
const myMother = new person("Sally", "Rally", 48, "green");

// Add a name method to first object
myFather.name = function () {
    return "My father is " + this.firstName + " " + this.lastName;
};

console.log(myFather.name());

*/
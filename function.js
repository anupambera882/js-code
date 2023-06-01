// // The toString() method returns the function as a string:
// function myFunction(a, b) {
//     return a * b;
// }
// let text = myFunction.toString();
// console.log(text);

// // Arrow Functions

// const square = (num) =>{
//     return num * num;
// }
// console.log(square(8));


// // The Arguments Object

// function findMax() {
//     let x = -Infinity;
//     for (let i = 0; i < arguments.length; i++) {
//         if (x < arguments[i]) {
//             x = arguments[i];
//         }
//     }
//     return x;
// }

// console.log(findMax(1, 123, 500, 115, 44, 88));

// The JavaScript call() Method 

// const person = {
//     fullName: function () {
//         console.log(this.firstName + " " + this.lastName);
//     }
// }
// const person1 = {
//     firstName: "John",
//     lastName: "Doe"
// }
// const person2 = {
//     firstName: "Mary",
//     lastName: "Doe"
// }

// // This will return "John Doe":
// person.fullName.call(person1);


// The call() Method with Arguments

const person = {
    fullName: function (city, country) {
        console.log(this.firstName + " " + this.lastName + "," + city + "," + country);
    }
}

const person1 = {
    firstName: "John",
    lastName: "Doe"
}

person.fullName.call(person1, "Oslo", "Norway");
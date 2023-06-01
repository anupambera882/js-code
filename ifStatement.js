let a = 45;

// if statement
if (a == 45) {
    console.log(a);
}

// if-else statement
if (a%2) {
    console.log("odd number");
} else {
    console.log("even number");
}

let age = 29;
// if-else-if statement
if (age < 0) {
    console.log("invalid input");
} else if (age < 18) {
    console.log("you are kid , you can not drive");
} else {
    console.log("you can drive");
}

// switch case statement
let option = 44;
switch (option%2) {
    case 0:
        console.log("even number");
        break;

    case 1:
        console.log("odd number");
        break;
    default:
        break;
}

// ternary operator
num < 0 ? console.log("nagative number") : console.log("positive number");
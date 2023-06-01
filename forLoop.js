
/*
// for loop

// write a code to perform factorial of n number
let num = 5;
let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial = factorial*i;
}
console.log(factorial);

*/


// for in loop
const object = {
    anupam : 78,
    rohit : 55,
    sudip : 79,
    rohan : 90
}
for (const key in object) {
    const val = object[key];
    console.log("mark of " + key +" is " + val);
}


/*
for (const i of "anupam") {
    console.log(i);
}

*/
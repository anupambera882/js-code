const RandomInt = Math.floor((Math.random()*100)+1);
let count = 0;
let num;

do {
    num = prompt("Enter a number");
    num = parseInt(num);

    if (RandomInt > num) {
        alert("random number is greater then given number");
    } else {
        alert("random number is less then given number");
    }
    count++;
}while (RandomInt != num);

alert("This is the write number\n You will count this number on "+count+" attempt");
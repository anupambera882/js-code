// reverse a number using while loop
let num = 123456;
let revNo = 0;

while (num > 0) {
    let rem = num%10;
    revNo = revNo*10+rem;
    num = (num-rem)/10;
}
console.log(revNo);

// print n Number using do-while loop
let n = 0;
let i = 0;
do {
    console.log(i+ " ");
    i++;
} while (i < n);
let a = null;
let b = 45;
let c = "Hello world";
let d = Symbol("this is a symbol");
let e;
let f = true;
let g = BigInt("45555");

console.log(a, b, c, d, e, f, g);
console.log(typeof d);

const student = {
    name : "anupam",
    ph_no : "8967264225",
    marks : 90,
}

student["class"] = 12;
console.log(student["class"]);
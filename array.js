let num = [1, 2, 3, 4, 5]

// for loop
for(let i=0; i<num.length;i++){
  console.log(num[i])
}

// ForEach Loop
num.forEach((element) => {
  console.log(element * element)
})

// Array.from 
let name = "Harry"
let arr = Array.from(name)
console.log(arr)

// for...of 
for (let item of num){
  console.log(item)
}

// for...in
for (let i in num){
  console.log(num[i])
}
// Array Methods
// let num = [1, 2, 3, 34, 4]
// let b = num.toString() // b is now a string 
// console.log(b, typeof b)
// let c = num.join(" and ")
// console.log(c, typeof c)

// let r = num.pop() // pop returns the popped element
// console.log(num, r)

// let r = num.push(56) // push returns the new array length
// console.log(num, r)

// let r = num.shift()
// console.log(num,r) // Removes an element from the start of the array

// let r = num.unshift(78)  // insert an element from the start of the array
// console.log(num,r)


// delete method ******************
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(num.length)
// let r = delete num[5]
// console.log(r);
// console.log(num.length)
// console.log(num);

// concat method
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
// let num_even_more = [211, 212, 213, 214, 415, 416, 417, 418, 419]
// let newArray = num.concat(num_more, num_even_more)
// console.log(newArray)
// console.log(num, num_more)


// sort method
// let compare = (a, b)=>{
//   return b - a
// }
// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// num.sort(compare)
// console.log(num)
// num.reverse()
// console.log(num)

// Splice and Slice
// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// let deletedValues = num.splice(2, 4, 1021, 1022, 1023, 1024, 1025)
// console.log(num)
// console.log(deletedValues)

// let newNum = num.slice(3)
// let newNum = num.slice(3, 5)
// console.log(newNum)

// Array map method
// let arr = [45, 23, 21]
// let a = arr.map((value, index, array) => {
//   console.log(value, index, array)
//   return value + index
// })
// console.log(a)

// Array filter method
// let arr2 = [45, 23, 21, 0, 3, 5]
// let a2 = arr2.filter((a) => {
//   return a < 10
// })
// console.log(a2, arr2)

// Array reduce method without function
// let arr3 = [1, 2, 3, 5, 2, 1]
// let newarr3 = arr3.reduce((a, b) =>{
//   return a+b;
// })
// console.log(newarr3)

// Array reduce method with function ***************
// let arr3 = [1, 2, 3, 5, 2, 1]
// const reduce_func = (h1, h2) => {
//   return h1 + h2
// }
// let newarr3 = arr3.reduce(reduce_func)
// console.log(newarr3);
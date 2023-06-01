// let MyArray = [1,2,3,4,5,6,7];

// MyArray.forEach((val , index)=>{
//     console.log(`${index} is ${val}`);
// });

// for (const val of MyArray) {
//     console.log(val);
// }


const obj = {
    firstName : "anuapm" ,
    lastName : "bera" ,
    roll : 57
}


for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        
    }
}
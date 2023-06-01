// object access using for loop
let marks = {
    harry : 90,
    rohan : 70,
    akash : 7
}

for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log("The marks of " + Object.keys(marks)[i] + " are "+ marks[Object.keys(marks)[i]]);
}
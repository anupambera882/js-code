// Class Inheritance

class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return 'I have a ' + this.carname;
    }
}

class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model;
    }
}

let myCar = new Model("Ford", "Mustang");

console.log(myCar.show());



class Student {
    constructor(roll,tClass,name) {
        this.roll = roll ,
        this.tClass = tClass ,
        this.name = name

        console.log(`roll = ${roll} and class = ${tClass} , name is ${name}`);
    }
}

class HsStudent extends Student {
    constructor(tenPass,roll,tClass,name) {
        super(roll,tClass,name);
        this.tenPass = tenPass;

        if (tenPass) {
            console.log("he/she successfully complited secondary education");
        }
    }
}


// const anupam = new HsStudent(1,45,11,"Anupam");
class Hero {
    constructor(name, power) {
        this.name = name;
        this.power = power;
    }

    //static means cannot be inherited/instanciated. Only be used inside the cls
    static showPowers() { 
        console.log(`Power of ${this.name} is ${this.power}`);
        
    }
}

class SuperMan extends Hero {
    constructor(name, power, extraPower) {
        super(name, power);
        this.extraPower = extraPower;
    }
    sayHello() {
        console.log(`Hello ${this.name}`);
        
    }
}

const spiderman = new Hero("spiderman", "spider-sense");
// console.log(spiderman);
// spiderman.showPowers(); -> Not accessible

const thor = new SuperMan("Thor", "Energy-exchange", "divine power");
// console.log(thor);
thor.sayHello();
// thor.showPowers(); -> Not accessible becoz static property
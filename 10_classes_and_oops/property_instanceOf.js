// instanceOf operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of the object we are checking for

class Animal {
    constructor(animalname) {
        this.animalname = animalname;
    }
    eats() {
        console.log(`${this.animalname} eats food`);
        
    }
}
class Carnivore extends Animal{
    constructor(animalname, movement) {
        super(animalname);
        this.movement = movement;
    }
}

const dog = new Carnivore("dog", "walk");
// console.log(dog instanceof Carnivore);// true
// console.log(dog instanceof Animal);// true
// console.log(dog instanceof Object);// true
// console.log(Animal instanceof Object);// true
// console.log(Carnivore instanceof Object);// true
// console.log(Boolean instanceof Object);


function Vehicle(make, model) {
    this.make = make;
    this.model = model;
}
const evCar = new Vehicle("Tata Tiago", "XE");
// console.log(evCar instanceof Vehicle); //true
// console.log(evCar instanceof Object);
// console.log(Vehicle instanceof Object);


//Symbol.hasInstance use
class Array1 {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);//Checks whether its an array or not
  }
}
/* 
static [Symbol.hasInstance](instance) this line
By default, the instanceof operator checks if an object belongs to a class by looking at its prototype chain. Defining [Symbol.hasInstance] allows you to completely bypass or "hijack" this default logic with your own custom rules*/

//Lets check the following belong to Array or not

// console.log([] instanceof Array1);
// console.log([1,2,3] instanceof Array1);
// console.log({arr: [1,2]} instanceof Array1);
// console.log({} instanceof Array1);
// console.log(["Hi"] instanceof Array1);


/*Use case: for scripts dealing with multiple frames or windows, and passing objects from one context to another via functions, you can securely check if a given object is in fact an Array using Array.isArray()*/

let myName = "tulsi";
console.log(typeof myName); //string
console.log(myName instanceof String);//false

let myUsername = new String("tkhere");
console.log(typeof myUsername); //object
console.log(myUsername instanceof String);//true

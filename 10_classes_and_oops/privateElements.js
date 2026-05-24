class myClass {
    // Unlike normal JavaScript properties that you can create on the fly, private properties must be declared at the very top of the class definition
    #firstPrivate = 14;
    normalVal = 55;
    static staticVal = 15;
    printFirstPrivate() {
        return this.#firstPrivate;
    }
    static greetUser() {
        return `Hello user!`;
    }
}
const car = new myClass();
console.log(car.firsPrivate); //undefined, not accessible directly
console.log(car.printFirstPrivate()); // 14
// console.log(car.greetUser()); //not a function
console.log(car.normalVal);//55
console.log(car.staticVal);// undefined


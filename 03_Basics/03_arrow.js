//this

const user = {
    username: "tulsi",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);//Refers to the current object
        
    }
}
// user.welcomeMessage()
user.username = "sam"
// user.welcomeMessage()

// console.log(this); //The global scope, {}


//CAN WE USE this WITH FUNCTIONS - Nope
function hello(){
    let username = "Aady"
    console.log(this.username); //undefined, compiler doesn't know what is this here
}
// hello()

const chai = function () {
    let username = "tulsi"
    console.log(this.username); //undefined
    
}
// chai()


//Normal Function
const addOne = function (num1, num2) {
    return num1 + num2
}
//Arrow Fun
const addTwo =  (num1, num2) => {
    return num1 + num2
}
//Arrow fun without return or {}
const addThree =  (num1, num2) =>  (num1 + num2)

const another = (num1, num2) => ({username: "tulsi"})

const anotherEquivalent = (num1, num2) => {
    return {username: "tulsi"}
}


//Arrow function used everywhere
const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(function () {})
// myArray.forEach(() => {})
// myArray.forEach(() => ())
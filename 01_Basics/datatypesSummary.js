//Primitive (7 types)
// String, number, boolean, null, undefined, symbol, Bigint
const firstName = "Tulsi"

const score = 90
const price = 102.34

const isLoggedIn = false
const outsideTemp = null
let userName;

const id = Symbol('101');
const newId = Symbol('101');

// console.log(id == newId); // => false

const bigNumber = 4897589856879829n

//-------Reference Types--------
//Arrays, Objects and Functions

const heros = ["batman","spiderman","shaktiman"]

let obj = {
    roll: 1234,
    age: 22
}

let myFunction = function(){
    console.log("Inside my function");    
}
// myFunction();// fun calling

/*---Return type of each datatype using typeof operator--- */
// console.table([typeof firstName, typeof score, typeof price,typeof isLoggedIn, typeof outsideTemp, typeof userName, typeof id,typeof bigNumber]);

// console.table([typeof heros,typeof myFunction, typeof obj])

/*~~~~Stack(Primitive) and Heap(Non-Primitive)~~~~ */
let myGithubProfile = "tulsicodes"
let newGithubProfile = myGithubProfile
newGithubProfile = "tkpcodes"

console.log(myGithubProfile);
console.log(newGithubProfile);

let userOne = {
    email: "tk@google.com",
    upi: "tk@ybl"
}
let userTwo = userOne

userTwo.email = "tkp@yahoo.com"
console.log(userOne.email);
console.log(userTwo.email);


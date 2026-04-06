//Singleton objects - object.create

//Object literals(not singleton)
const mySym = Symbol("key1")

const user = {
    name: "Tulsi",
    "full name": "Tulsi Kumari",
    [mySym]: "mykey1",
    age: 22,
    location: "Rourkela",
    email: "ta22@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Wednesday"]
}

// console.log(user.email);
// console.log(user["email"]);
// console.log(user["full name"]);
// console.log(user[mySym]);

user.email = "tk124@gmail.com"
// console.log(user.email);
// Object.freeze(user)
user.email = "tulsi@gmail.com"
// console.log(user.email); //No changes in the email


user.greeting  = function () {
    console.log("Hello! user");    
}
user.greetingTwo  = function () {
    console.log(`Hello user, ${this.name}`);    
}

user.greeting() //Hello! user
user.greetingTwo() //Hello user, Tulsi

console.log(user.greeting()); 
//Hello! user
//undefined---- Why this ?
console.log(user.greeting); //[Function (anonymous)]
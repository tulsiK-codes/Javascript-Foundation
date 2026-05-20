//Function is a function and object too
function add2(num) {
    return num+2;
} 
add2.chai = 3; //but .property is available for objects. So, fun is also an object? - Yes 
// console.log(add2(10));
// console.log(add2.chai);//same as we do with objects, when setting properties(key, values)
// console.log(add2.prototype);

function createUser(username, id, score) {
    this.username = username;
    this.id = id;
    this.score = score;
}

//Can we set our own methods to a function?
//  Yes we can

createUser.prototype.welcomeUser = function() {
    console.log(`Welcome ${this.username}`);
    
}
createUser.prototype.printScore = function(){
    console.log(`Your score is ${this.score}`);
    
}

const userA = new createUser("tulsi", "15", 70);
const userB = new createUser("aady", "16", 88);
// console.log(userA.printScore()); ->says printScore() is undefined. Use new keyword
userA.printScore(); //That means we can set our own prototype properties/functionalities
userB.welcomeUser();





/* 
Notes on new:

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.


*/
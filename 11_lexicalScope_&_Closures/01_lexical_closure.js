//Lexical Scope

function init() {
  let name = "Mozilla";
  function displayName() {
    console.log(name); //Mozilla
  }
  displayName();
}
// init();


//But how does the displayName got access to name, which was not declared inside its body?
/*
1.  This is an example of lexical scoping, which describes how a parser resolves variable names when functions are nested.
2. The word lexical refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available.
3. Nested functions have access to variables declared in their outer scope(function). 
*/

function outer() {
    let chai = "Masala Chai";
    // console.log("Your tea", tea);//tea is not defined
    
    function inner() {
        let tea = "Latte tea";
        console.log(`Your ${chai} is here!`);       
        
        console.log(`Would you like to have ${tea} ?`);
    }
    function innerTwo() {
        console.log(`Do you want more ${chai}?`);        
        
        // console.log(`Can I have ${tea} ?`); //ReferenceError: tea is not defined
    }
    inner();
    innerTwo();
}
// outer();
// console.log(chai); ->chai is not defined


//CLOSURE
/*1. A closure is the combination of a function and the lexical environment within which that function was declared. 
2. This environment consists of any variables that were in-scope at the time the closure was created.
*/
function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);//lexical scoping
  }
  return displayName;
}

const myFunc = makeFunc();
// myFunc();
/*
-> myFunc is a reference to the instance of the function displayName that is created when makeFunc is run.
-> instance of displayName maintains a reference to its lexical environment, within which the variable 'name' exists.
->  For this reason, when myFunc is invoked, the variable 'name' remains available for use, and "Mozilla" is passed to console.log
*/

//Another example
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5); //Stores reference of inner fun with x=5
const add10 = makeAdder(10);

console.log(add5(2)); // Inner fun reference invoked, y=2 passed and we already have x=5
console.log(add10(2)); // 12
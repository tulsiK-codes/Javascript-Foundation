const userId = []

if (userId) { //Here, no condition is written still userId is considered true
    // console.log("Got user id");
    
} else {
    // console.log("Don't have user id");
    
}

//********Falsy values*******
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function () {}


//Whether Array is empty
if(userId.length === 0){
    // console.log("The array is empty");
    
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    // console.log("Object is empty");
    
}


//~~~~~~~Nullish Coalescing Operator~~~~~~~
//To avoid null, undefined values
let val1;
// val1 = null ?? 5
// val1 = 8 ?? 10
val1 = undefined ?? null ?? 4

console.log(val1);



//Ternary operator (like the if-else)

const priceItem = 95
priceItem <= 80 ? console.log("Buy it") : console.log("Opt other item")


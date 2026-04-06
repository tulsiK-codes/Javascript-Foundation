// var c = 300
let a = 140

if(true){
    let a = 4
    const b = 5
    // var c = 15 //global c is overwritten
    // console.log(`Inner a = ${a}`);
    
}
// console.log(`a outside block scope = ${a}`);


// console.log(a); //a is not defined
// console.log(b); //b is not defined
// console.log(c); //15 , it should be accessible outside its scope. Thats the problem with using var


function one() {
    const username = "tulsi"

    function two(){
        const website = "github"
        console.log(username);        
    }
    // console.log(website); //outside scope

    two()

}
// one()


if(true) {
    const username = "Khushi"
    if(username == "Khushi"){
        const website = "github"
        // console.log(`${username} ${website}`);        
    }
    // console.log(website);
    
}
// console.log(username);




// ++++++++++++++Interesting++++++++++++++++++
console.log(addOne(4)); //5,Because addOne is hoisted and initialised in memory allocation phase as its a function

function addOne(num) {
    return num + 1
}

// console.log(addTwo(5));//Cannot access 'addTwo' before initialization. Because addTwo is hoisted in memory allocation phase, but not initialised..so cant be executed before its intialisation in below lines

const addTwo = function addTwo(num) {
    return num + 2
}


/* Hoisting = variables/functions are registered before execution

TDZ = a safety zone where let/const exist but cannot be accessed
 */

/*Function declarations → fully usable early
var → usable but undefined
let/const → unusable until declaration line*/
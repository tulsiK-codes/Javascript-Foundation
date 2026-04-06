function happyDay() {
    console.log("Hello, buddy!");
    console.log("Have a great day!");    
}

// happyDay()

//num1,num2 are parameters
function add2Nums(num1, num2) { 
    // let result = num1 + num2
    // console.log(result);
    
    return num1 + num2
}

// add2Nums(4,5) //Arguments passed
let result = add2Nums(4,8)
// console.log(result);


//Handling undefined case(when no arguments passed)
function loginUserMessage(username){
    if(!username){ //if undefined 
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Tulsi"));


//Default parameter value, undefined case handled
// function loginUserMessage(username = "Sam"){
    
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("Tulsi"));
// console.log(loginUserMessage());


/*********Taking multiple(unknown number of) values in parameters********* */

// ... rest operator
function calculateCartPrice(val1, val2, ...num1){ 
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000));
//[500, 2000]


//++++We can  also pass object as parameters+++++

const user = {
    username: "tulsi",
    price: 399
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);    
}

// handleObject(user) //passing object

handleObject(
    {
        username: "sam",
        price: 499
    }
)//passing object 

const myArr = [40,59,200,100]

function getSecondValue(getArray){//passing array
    return getArray[1] //returning 2nd value
}

// console.log(getSecondValue(myArr));
console.log(getSecondValue([44,30,12,78]));

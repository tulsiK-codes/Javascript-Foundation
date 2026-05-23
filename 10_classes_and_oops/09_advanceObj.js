/* Interview Question: Can we change the value of Math.PI? If yes, then how and if no then why? */

// console.log(Math.PI);//3.141592653589793
// console.log(Object.getOwnPropertyDescriptor(Math, "PI"));
//PI values cannot be changed becoz 
/*{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

//Lets try changing it
// Object.defineProperty(Math, "PI", {
//   value: 3.141592653589793,
//   writable: true,
//   enumerable: true,
//   configurable: true
//})
/*Error: Cannot redefine property: PI
Because Javascript protects it at the engine level using non-configurable and non-writable property descriptor.
As when configurable is set to false, the property's descriptor attributes cannot be changed.
*/



//Example of where our code can break?
const car = {
    modelname: "Maruti X 66",
    CC: "11000",
    isNew: true,

    startCar: function () {
        console.log(`Car started`);        
    }
}

for (let [key, value] of Object.entries(car)) {
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
    
}

//This is where our code breaks
/*
modelname: Maruti X 66
CC: 11000
isNew: true
startCar: function () {
        console.log(`Car started`);        
    } ---> we just wanted [key,value] pairs, Not this above function. So do a check before logging to console.
*/
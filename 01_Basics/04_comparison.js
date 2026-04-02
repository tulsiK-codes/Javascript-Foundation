//------Normal Comparison
// console.log(2 > 1); -> true
// console.log(2 >= 1); -> true
// console.log(2 < 1); -> false
// console.log(2 == 1); -> false
// console.log(2 != 1); -> true


//--------Type coercion rules (JS converts string to a number for comparison-----
// console.log("2" > 1); -> true
//  console.log("2a" > 1); ->false

console.log(null > 0); //false
console.log(null >= 0); //true, internally null converted to 0
console.log(null == 0); //false,here coercion doesn't work because comparison and equality operator works differently
console.log(null == undefined); //return true

//checking value as well as datatype
console.log("2" === 2);

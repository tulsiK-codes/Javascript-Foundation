//Arrays in Javscript []
//Can store different datatypes and also are resizable
const myArr = [0,1,2,3,4,5]
const fruits = ["apple","mango","grapes"]
const mySecondArr = new Array(1,2,3,4,5)//Array object declared using Array()

// console.log(myArr[2]);
// console.log(mySecondArr);


//Array methods
myArr.push(6);
myArr.push(7)
myArr.pop()
// console.log(myArr);

myArr.unshift(8)
// console.log(myArr); 
/*OUTPUT
[
  8, 0, 1, 2,
  3, 4, 5, 6
]*/
myArr.shift()
// console.log(myArr);


// console.log(myArr.includes(4)); //true
// console.log(myArr.includes(12)); //false

const newArr = myArr.join()
// console.log(newArr); //returns a string 0,1,2,3,4,5,6
// console.log(myArr); //the array is returned

//slice,splice
console.log(`A, ${myArr}`);//A, 0,1,2,3,4,5,6

const new1 = myArr.slice(1,4)//Syntax: slice(start, end) and return copy of array starting and excluding end

console.log(`new1 = ${new1}`);//new1 = 1,2,3
console.log(`B, ${myArr}`);//B, 0,1,2,3,4,5,6

const new2 = myArr.splice(1,4) //Syntax: splice(start,deleteCount) -> removes elements from start index, if deleteCount not specified then delete all the elements

console.log(`new2 = ${new2}`);//new2 = 1,2,3,4
console.log(`C, ${myArr}`);//C, 0,5,6
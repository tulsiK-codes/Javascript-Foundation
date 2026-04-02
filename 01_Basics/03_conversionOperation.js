let score = "34"
let score2 = "33abc"
let score3 = "prasant"
let score4 = false
// console.log(typeof score);
// console.log(typeof(score));

//--------Number conversion--------

let valueInNumber = Number(score4);
// console.log(valueInNumber);
// console.log(typeof valueInNumber);

//"34" => 34
// "33abc" => NaN
// "prasant" = NaN
// true => 1; false => 0

//--------Boolean conversion--------

let isLoggedIn = "tulsi"
// let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0=>false
// "" => false
// "tulsi" => true

//--------String conversion--------

let mark = 67
let stringMark = String(mark)
// console.log(stringMark);
// console.log(typeof stringMark);

//-------------Operations---------------
let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); //power operator
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

//What we should be careful of/should not practice
// console.log("1" + 2);
// console.log(2 + "1");
// console.log("1" + 2 + 2); //1st string was there, so concatenation
// console.log(1 + 2 + "2"); //First adding, then concatenation with the string..but its not a good practice

// console.log((3+4) * 5 % 3); use proper parenthesis

// console.log(+true); //prints 1
// console.log(+""); //prints 0

let num1, num2, num3;
// num1 = num2 = num3 = 2 + 2 //Not readable, we can directly write 4 as the value

let gameCounter = 100
// console.log(++gameCounter); => 101
// console.log(gameCounter++); => 100



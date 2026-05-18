const numArr = [4, 17, 91, 33, 67, 9];
const chArray = ['a', 'e', 'i' , 'o', 'u'];

const numChar = [...numArr, ...chArray];
//Destructured with spread operator
console.log(numChar);

const [a, b] = numArr;
console.log(a); // 4 by destructuring
console.log(b); //17 

const [first, second, ...rest] = chArray;
console.log(first); //a
console.log(second); //e
console.log(rest); //(3) ['i', 'o', 'u']
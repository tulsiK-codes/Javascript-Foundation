const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const floatingNum = 456.1687
// console.log(floatingNum.toPrecision(5));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


//++++++++++++++++++Maths+++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4.2));
// console.log(Math.round(4.23));
// console.log(Math.ceil(6.2));
// console.log(Math.floor(6.9));
// console.log(Math.min(1,2,15,42));
// console.log(Math.max(78,69,92,15));

//random() - gives random value between 0 and 1
// console.log(Math.random());
// console.log((Math.random() * 10) + 1); //To get numbers between (1 - 9), removing zeros
// console.log(Math.floor((Math.random() * 10) + 1));//Removes decimal and gives lower bound

const min = 5
const max = 15

console.log(Math.floor(Math.random() * (max - min +1)) + min);

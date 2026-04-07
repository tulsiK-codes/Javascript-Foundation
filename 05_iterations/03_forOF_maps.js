//for of

//["","","",""]
//[{}, {}, {}]

const arr = [1, 2, 3, 4]

for (const num of arr) {
    // console.log(num);
    
}

const greetings = "Hello, user!"
for (const greet of greetings) {
    if(greet === " "){
        continue
    }
    // console.log(`Each character is ${greet}`);
    
}


//Maps - stores values in [key, value] pairs and has unique keys. Also the sequence of insertion is remembered
const map = new Map()
map.set('IN',"India")
map.set('Eu',"Europe")
map.set('UK',"United Kingdom")
map.set('Fr',"France")

// console.log((map));
/*Map(4) {
  'IN' => 'India',
  'Eu' => 'Europe',
  'UK' => 'United Kingdom',
  'Fr' => 'France'
}*/

for (const key of map) {
    // console.log(key);  
     /* [ 'IN', 'India' ]
        [ 'Eu', 'Europe' ]
        [ 'UK', 'United Kingdom' ]
        [ 'Fr', 'France' ] */  
}

for (const [key, value] of map) {
    // console.log(`${key} :- ${value}`);
    
}

//Does forOf works with objects also?
const myObj = {
    player1: "Rakesh",
    player2: "Hitesh"
}

// for (const [key,value] of myObj) {
//     console.log(key);//myObj is not iterable
//     console.log(`${key} :- ${value}`);
    
// }
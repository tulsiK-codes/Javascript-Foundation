const userName = "tulsi"
const consistencyStrik = 2
// console.log(userName + consistencyStrik + "value") //This is outdated way

// console.log(`Hello my name is ${userName} and my consistency strik is ${consistencyStrik} `);

const newGame = new String('tulsiK-code-com')//creating string this way allows us to use various String.prototype.methods
//1. anchor() -> deprecated now
//Use:
/*const contentString = "Hello, world";

document.body.innerHTML = contentString.anchor("hello");*/

//THE ABOVE WILL CREATE HTML: 
// <a name="hello">Hello, world</a>




/* Instead of using anchor() and creating HTML text directly, you should use DOM APIs such as document.createElement().
*/
// const contentString = "Hello, world";
// const elem = document.createElement("a");
// elem.innerText = contentString;
// document.body.appendChild(elem);



//------at(), charAt(), and slice()--------
const myStr = new String("Hello World")
// console.log(myStr.length);
//Using charAt() 
// console.log(myStr.charAt(myStr.length-1)); //d
// console.log(myStr.charAt(-1)); //does not support negative indexing

//Using at()
// console.log(myStr.at(myStr.length-1)); //d
// console.log(myStr.at(-1)); //d

//Using slice
// console.log(myStr.slice(-1)); //d
// console.log(myStr.slice(0,3)); //Hel

// console.log(myStr.slice(-1,-1));//empty string


//big() ->(Deprecated)causes the string to be displayed in a big font <big> tag in HTML, instead  use CSS to manipulate fonts
//blink() ->(Deprecated) embeds the string  (<blink>str</blink>), which used to cause a string to blink.  You should avoid blinking elements altogether
//bold() ->(Deprecated) embeds the string  (<b>str</b>), which causes this string to be displayed as bold.
// Instead of using bold(), you should use DOM APIs such as document.createElement()
/* const contentString = "Hello, world";
const elem = document.createElement("b");
elem.innerText = contentString;
document.body.appendChild(elem);
*/

let str = "𠮷𠮾"; //unicode requiring 16 bits
// console.log(str.charAt(0)); //It only supports 8 bit, does not support 16 bit
// console.log(str.at(0)); //supports unicode




// console.log(String.fromCodePoint(128516));//Displays smile emoji, it creates unicode
const emoji = String.fromCodePoint(128516)
// console.log(emoji.codePointAt(0));//reads the unicode and display unicode value 128516



//Difference between charAt() and []index
const aString = new String("Apple")
// console.log(aString.charAt(2));
// console.log(aString[2]);
// console.log(aString.length); //5

// console.log(aString.charAt(10));//returns empty string for invalid index
// console.log(aString[10]); //returns undefined for invalid index

// console.log(str.charAt("abc")); //� returned
// console.log(str["abc"]);// returns undefined


//concat()
const hello = "Hello, ";
// console.log(hello.concat("Aady", ". Have a nice day."));
//"".concat(value1, value2, ...)
const greetList = ["Hello", " ", "Tulsi", "!"];//array
// console.log("".concat(...greetList));//spread operator used

"".concat({}); // "[object Object]"
"".concat([]); // ""
"".concat(null); // "null"
"".concat(true); // "true"
"".concat(4, 5); // "45"
//Better alternative
// console.log(`Hello ${"Tulsi"}!`);
// console.log(greetList.join("")); //Works on array elements(Takes all elements of the array, and converts them into String using diven seperator)
// console.log([1, 3, true].join("-"));

/* endsWith(searchString)
*/
const greet = "Have a nice day!"
// console.log(greet.endsWith("day!")); //true
// console.log(greet.length)
// endsWith(searchString, endPosition)--> endPosition is not indicating the index but the count or length
// console.log(greet.endsWith("day!",greet.length)); //true, becox checks the count, not index
// TypeError: Thrown if searchString is a regex


/*includes(searchString) */
//console.log("Blue Whale".includes("blue")); // returns false
// console.log("Blue Whale".toLowerCase().includes("blue")); // returns true
/*includes(searchString, position) */
// console.log("Blue Whale".includes("Blue",1)); // returns false
// console.log("Blue Whale".includes("Blue",0)); // returns true


//indexOf() -> index of the first occurrence of searchString found, or -1 if not found
const helloStr = "hello world"
// console.log(helloStr.indexOf('o', -5)); //-5 considered 0. If position is less than zero, the method behaves as it would if position were 0.
// console.log(helloStr.indexOf('world', 99));//99 index is invalid. If position is greater than the length of the calling string, the method doesn't search the calling string at all and returns -1.

// indexOf(searchString, position)
// console.log(helloStr.indexOf('l', 4));
//indexOf(searchString)
// console.log(helloStr.indexOf('l'));


/* | Expression | Result | Reason                       |
| ---------- | ------ | ---------------------------- |
| `"a"`      | 3      | last occurrence              |
| `"a", 2`   | 1      | search backward from index 2 |
| `"a", 0`   | -1     | not found at index 0         |
| `"x"`      | -1     | not present                  |
| `"c", -5`  | 0      | -5 → 0                       |
| `"c", 0`   | 0      | found at 0                   |
| `""`       | 5      | empty string at end          |
| `"", 2`    | 2      | empty string at index        |
 */
/* c   a   n   a   l
   0   1   2   3   4 */
// console.log("canal".lastIndexOf("a")); // returns 3
// console.log("canal".lastIndexOf("a", 2)); // returns 1
"canal".lastIndexOf("a", 0); // returns -1
"canal".lastIndexOf("x"); // returns -1
"canal".lastIndexOf("c", -5); // returns 0
"canal".lastIndexOf("c", 0); // returns 0
"canal".lastIndexOf(""); // returns 5
"canal".lastIndexOf("", 2); // returns 2


//isWellFormed - checks for lone surrogate pair (out of a unicode pair, only one is present)
let wellFormStr = "a\uDFFFbc";
let str2 = "ab\uD83D\uDE04c"
// console.log(wellFormStr.isWellFormed());
// console.log(str2.isWellFormed());
// console.log(wellFormStr.toWellFormed());
// console.log(str2.toWellFormed());


//localeCompare() method of String values returns a number indicating whether this string comes before, or after, or is the same as the given string in sort order
const a = "réservé"; // With accents, lowercase
const b = "RESERVE"; // No accents, uppercase
/*localeCompare(compareString)
localeCompare(compareString, locales)
localeCompare(compareString, locales, options)*/
// console.log(a.localeCompare(b)); // Expected output: 1
// console.log(a.localeCompare(b, "en", { sensitivity: "base" })); // Expected output: 0



// match() method of String values retrieves the result of matching this string against a regular expression
const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

// console.log(found);

const para2 = "The quick brown fox jumps over the lazy dog. It barked.";
const capturingRegex = /(?<animal>fox|cat) jumps over/;
const found2 = para2.match(capturingRegex);
// console.log(found2.groups); // {animal: "fox"}


//The matchAll() method of String values returns an iterator of all results matching this string against a regular expression, including capturing groups.
const regexp = /t(e)(st(\d?))/g;
const strMatch = "test1test2";

const array = [...strMatch.matchAll(regexp)];

// console.log(array[0]);
// console.log(array[1]);

//using iterator
const regexp2 = /foo[a-z]*/g;
const strMatch2 = "table football, foosball";
const matches = strMatch2.matchAll(regexp2);

for (const match of matches) {
  console.log(
    `Found ${match[0]} start=${match.index} end=${
      match.index + match[0].length
    }.`,
  );
}





// Note:All these HTML wrapper methods are deprecated
/*String.prototype.anchor() Deprecated
<a name="name"> (hypertext target)

String.prototype.big() Deprecated
<big>
String.prototype.blink() Deprecated
<blink>

String.prototype.bold() Deprecated
<b>
String.prototype.fixed() Deprecated
<tt>
String.prototype.fontcolor() Deprecated
<font color="color">

String.prototype.fontsize() Deprecated
<font size="size">

String.prototype.italics() Deprecated
<i>
String.prototype.link() Deprecated
<a href="url"> 

String.prototype.small() Deprecated
<small>
String.prototype.strike() Deprecated
<strike>
String.prototype.sub() Deprecated
<sub>
String.prototype.sup() Deprecated
<sup>
*/
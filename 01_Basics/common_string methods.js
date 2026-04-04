//split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array
const str2 = "The quick brown fox jumps over the lazy dog.";
const words = str2.split(" ");
console.log(words[3]);// Expected output: "fox"

const chars = str2.split("");
console.log(chars[8]);// Expected output: "k"

const strCopy = str2.split();
console.log(strCopy);//Array ["The quick brown fox jumps over the lazy dog."]


//search() method of String values executes a search for a match between a regular expression and this string, returning the index of the first match in the string
const paragraph = "I think Ruth's dog is cuter than your dog!";
const regex = /[^\w\s']/g;// regex meaning - Anything not a word character, whitespace or apostrophe

console.log(paragraph.search(regex));// Expected output: 41

console.log(paragraph[paragraph.search(regex)]);// Expected output: "!"


//substring() method of String values returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied
const str1 = "Mozilla";
console.log(str1.substring(1, 3));// Expected output: "oz"

console.log(str1.substring(2));// Expected output: "zilla"


//slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string
const str = "The quick brown fox jumps over the lazy dog.";
console.log(str.slice(31));// Expected output: "the lazy dog."

console.log(str.slice(4, 19));// Expected output: "quick brown fox"

console.log(str.slice(-4));// Expected output: "dog."

console.log(str.slice(-9, -5));// Expected output: "lazy"


//Difference between slice() and substring()
str.slice(-3, -1); // possible
str.substring(-3, -1); // returns "" and -ve indexing not supported

str.slice(4, 1); // returns "" because start>end here
str.substring(4, 1); // prints "ell", indices swapped and substring extracted


//startsWith() method of String values determines whether this string begins with the characters of a specified string, returning true or false as appropriate
const str3 = "Saturday night plans";

console.log(str3.startsWith("Sat"));// Expected output: true

console.log(str3.startsWith("Sat", 3));// Expected output: false


//endsWith() method of String values determines whether a string ends with the characters of this string, returning true or false as appropriate
const str4 = "Cats are the best!";

console.log(str4.endsWith("best!"));// Expected output: true
console.log(str4.endsWith("best", 17));// Expected output: true

const str5 = "Is this a question?";
console.log(str5.endsWith("question"));// Expected output: false


//valueOf() - A string representing the primitive value of a given String object.
const stringObj = new String("foo");

console.log(stringObj);// Expected output: String { "foo" }
console.log(stringObj.valueOf());// Expected output: "foo"


//toLowerCase(), toUpperCase()
//toLocaleLowerCase(), toLocaleUpperCase()


//toString() method of String values returns this string value
const stringObj2 = new String("foo");

console.log(stringObj2);// Expected output: String { "foo" }
console.log(stringObj2.toString());// Expected output: "foo"

//trim(), trimStart() and trimEnd - to trim extra whitespaces

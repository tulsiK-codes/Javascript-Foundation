const heros = ["thor", "Ironman", "spiderman"]
const princesses = ["Cindrella","Moana","Ariel","Belle"]
// heros.push(princesses);
// console.log(heros);
/* On pushing 
[
  'thor',
  'Ironman',
  'spiderman',
  [ 'Cindrella', 'Moana', 'Ariel', 'Belle' ]       
]
 */

// const allCharacters = heros.concat(princesses)
// console.log(allCharacters);
/* on concating(but it is limited to 2 arrays only)
[
  'thor',
  'Ironman',
  'spiderman',
  'Cindrella',
  'Moana',
  'Ariel',
  'Belle'
] */

//using spread operator
// const all_new_Characters = [...heros,...princesses]
//we can concat as many arrays as we need
// console.log(all_new_Characters);

const multi_Arr = [1,2,3,[4,5,6],7,8,[5,6,[2,3]]]
const flatedArr = multi_Arr.flat(Infinity)// flat(depth/levels)
// const flatedArr = multi_Arr.flat(1) //[ 1, 2, 3, 4, 5, 6, 7, 8, 5, 6, [ 2, 3 ] ]
// console.log(flatedArr);


// console.log(Array.isArray("Tulsi"));// false, as it is a String

//Array.from and Array.of
console.log(Array.from([1,2,3,4])); //Iterable element
//[ 1, 2, 3, 4 ]
console.log(Array.from("Hello", x => x));//Iterable element with mapping function
//[ 'H', 'e', 'l', 'l', 'o' ]
console.log(Array.from([0,1,2,3,4], x => x+2));
//[ 2, 3, 4, 5, 6 ]

//Syntax: Array.of(element1, element2, /* …, */ elementN)
let m1 = 100
let m2 = 200
let m3 = 300
console.log(Array.of(m1, m2, m3));//[ 100, 200, 300 ]

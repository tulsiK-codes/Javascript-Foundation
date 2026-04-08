const marks = [80, 85, 90, 92, 74, 96]
let highestMarks = marks.filter( (mk) => mk > 85)
                    .map( (mk2) => mk2 - 5)
                    .map( (mk3) => mk3 * 10)
console.log(highestMarks);

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumbers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 50)
console.log(newNums);


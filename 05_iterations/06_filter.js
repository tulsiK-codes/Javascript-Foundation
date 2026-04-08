const coding = ["js", "ruby", "java", "python", "cpp"]
const values = coding.forEach( (item,index,arr) => {
    // console.log(item, index, arr);
    // return item
} );
// console.log(values) //undefined
//forEach() doesn't return any values

//filter()
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const myArr = myNums.filter( (num) => (num >=5))
// console.log(myArr);


//Condition check with forEach
const newNums = []
myNums.forEach( (num) => {
    if(num > 5) newNums.push(num)
})
// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (bk) => bk.publish > 2000)
userBooks = books.filter( (bk) => bk.genre === 'Non-Fiction')
userBooks = books.filter( (bk) => bk.edition >= 2010)
userBooks = books.filter( (bk) => bk.publish < 1990)


console.log(userBooks);
// const githubUser = new Object()// Singleton
const githubUser = {}

githubUser.id = "4378tg"
githubUser.name = "megha"
githubUser.isLoggedIn = false

// console.log(githubUser);

//****Object can also be stored inside objects****
const fbUser = {
    email: "example@yahoo.com",
    fullname: {
        userfullname: {
            firstname: "Tulsi",
            lastname: "Kumari"
        }
    }
}
// console.log(fbUser.fullname.userfullname.firstname);

//-------------Object.assign()---------------
const ob1 = {1: "a", 2: "b"}
const ob2 = {3: "a", 4: "b"}
const ob3 = {5: "a", 6: "b"}

// const ob4 = {ob1,ob2,ob3}
// console.log(ob4);
/*{
  ob1: { '1': 'a', '2': 'b' },
  ob2: { '3': 'a', '4': 'b' },
  ob3: { '5': 'a', '6': 'b' }
}*/


const ob4 = Object.assign({},ob1,ob2,ob3)
// const ob4 = Object.assign(ob1,ob2,ob3) //Here,ob2 and ob3 are first stored in ob1
// console.log(ob4); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const ob5 = {...ob1,...ob2,...ob3}//Does exact same thing as Object.assign()
// console.log(ob5);

//++++++++++Array storing objects+++++++++++++++
const normalUser  = [
    {
        id: 1,
        username: "user1"
    },
    {
        id: 2,
        username: "user1"
    },
    {
        id: 3,
        username: "user3"
    }
]
// console.log(normalUser[1].username);


//We can also access the keys, or values -----as array--------- and perform operation on them
// console.log(Object.keys(githubUser));
// console.log(Object.values(githubUser));
// console.log(Object.entries(githubUser));


const course = {
    coursename: "full web dev",
    price: 499,
    courseinstructor: "Hitesh"
}

//----------Destructuring of objects------------
const {courseinstructor: instructor} = course
console.log(instructor); //Hitesh, here instead of writing course.courseinstructor I wrote just instructor


//~~~~~~~~~~~~~JSON file formats~~~~~~~~~~~~~~~

//Example - Random User Generator API

// {
//     "name": "tulsi",
//     "qualification": "BCS graduate",
//     "current status": "MCA 1st yr"
// }

[
    {},
    {},
    {},
    {}
]

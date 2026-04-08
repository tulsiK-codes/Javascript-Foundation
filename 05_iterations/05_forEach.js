//forEach
//It always returns undefined and is not chainable
// You cannot stop or break a forEach() loop except by throwing an exception
//



const coding = ['js',"ruby",'python', 'cpp', 'java']
coding.forEach( function (val) {
    // console.log(val);
    
})

coding.forEach((value) => {
    // console.log(value);
    
});

function printHello(user) {
    console.log(`Hello, ${user}`);
    
}

const users = ["jenny","sam", 'robbins', 'jack']
// users.forEach(printHello) //only give the reference to callBackFun not printHello()

//forEach(value, index, array itself)
coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
    //Output like 
    // js 0 [ 'js', 'ruby', 'python', 'cpp', 'java' ]
});


const players = [
    {
        sportName: "football",
        player: "Cristiano Ronaldo"
    },
    {
        sportName: "baseball",
        player: "Willie Mays"
    },
    {
        sportName: "hockey",
        player: "Manpreet Singh"
    }
]
players.forEach( (item) => {
    console.log(`Sports : ${item.sportName} and player : ${item.player}`);
    
})
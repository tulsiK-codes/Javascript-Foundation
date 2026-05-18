//Creating a promise
//Promise(callback fun)
const promiseOne = new Promise(function(resolve, reject) { // Promise creation
    //Asynchronous operation like DB calls, cryptography and network
    setTimeout(function() {
        console.log("Async task is complete");
        resolve(5);
    }, 1000);
});
//The above displays "Async task is complete" after 1 sec, which is normal. Whats the work of promise here? After the async operation completed successfully call resolve() and it connects you to then()

promiseOne.then(function(a) {//Promise consumption
    console.log("Promise consumed");    
});
// In terminal, following is displayed
//Async task is complete
// Promise consumed

new Promise(function(resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve();
    }, 1000);

}).then(function() {
    console.log("Async 2 resolved");
});

const promiseThree = new Promise(function(resolve,reject) {
    setTimeout(function() {
        resolve({username: "tulsi", email: "tkp@example.com"}); //Values passed to .then()
    }, 1000);
});

promiseThree.then(function(user){
    console.log(user);    
});

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if(!error) {
            resolve({exam: "nptel", coursename: "cloud computing"});
        } else {
            reject("ERROR: Something went wrong"); 
        }
    }, 1000);
});
//.then() always returns to the .then() following it(thennable)
promiseFour
.then((course) => {
    console.log(course);
    return course.coursename;
})
.then((coursename) => {
    console.log(coursename);    
})
.catch((error) => {
    console.log(error);    
})
.finally(() => console.log(`Promise is either resolved or rejected`));


const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if(!error) {
            resolve({course: "db", coursename: "Database"});
        } else {
            reject("ERROR: Data not found");
        }
    }, 1000);
});

// We can also use async await to resolve this
async function consumePromisefive() {
    try {
        const reponse = await promiseFive
        console.log(reponse);
    } catch (error) {
        console.log(error);        
    }
}

consumePromisefive();


//Async Fun foy next class. Not for Promise consumption
// async function getAllUsers() {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     //   console.log(response);      
//       const data = await response.json();//This also takes time
//       console.log(data);//Shown at top although written at last
      
//     } catch (error) {
//         console.log("E: ", error);        
//     }
// }

// getAllUsers();

//For next class discussion
fetch('https://api.github.com/users/HiteshChoudhary')
.then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error))
/* Imp thing to note here is thhe data is shown in terminal first and then the async await of other timeout outputs are shown. */


//Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected.
Promise.all([promiseOne, promiseThree, promiseFour])
.then((values) => console.log(values))
.catch((error) => console.log(error))


Promise.allSettled([promiseOne, promiseThree, promiseFour])
.then((values) => console.log(values))
.catch((error) => console.log(error))
//++++++Object Literal +++++++++++++
const user = {
    //Properties
    username: "tulsi",
    isLoggedIn: true,
    email: "tk@example.com",

    //Methods
    getUserDetails: function () {
        // console.log("Got user details from DB");   

        // console.log(`Username is ${username}`);//Reference error: username not defined as its not inside this functional scope, and even if its inside the object, it does not know you want that username, for it write 'this' to refer to the currentcontext it is in.
        
        // console.log(`Username is ${this.username}`);
        console.log(this); //Got the object
        
    }
}
/**** If we want to store another user, then we will have to create the same object once again with other user details. But this way of doing things is not feasible, thats why a structure is created and using functions and constructors **** */

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this); //Got empty obj -> {}

/*+++++++'this' keyword discussed ++++++ */

//Now some more discussion about this and new
function userData(username, userid, isLoggedIn){
    this.username = username;
    this.userid = userid;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
        
    }
    return this;
}

const userOne = new userData("tulsi","14",true);
const userTwo = new userData("smruti","28",false);
// console.log(userOne.constructor);
// console.log(userTwo);
// console.log(userOne.greeting());


/* 
const userOne = userData("tulsi","14",true);
const userTwo = userData("smruti","28",false);

In the above code, userTwo overrides the data written by userOne, which should not happen as it may create a lot of problems if multiple users are working.
For having unique values, use 'new' keyword
*/
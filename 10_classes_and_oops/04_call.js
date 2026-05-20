//call()

function setUsername(username) {
    //Complex DB calls, to check whether this username is unique
    this.username = username;
}

function createUser(username, email, password) {
    setUsername.call(this, username);

    this.email = email;
    this.password = password;
    console.log("called");
    
}

const tulsi = new createUser("tkcodes", "tk@example.com", "1234");
console.log(tulsi); //only the email and password is shown, but what about the username?

//Here, setUsername(username) goes to the setUsername() function, but after its execution, it leaves the call stack and all its execution context is removed. But we want to set the username inside our createUser(). 
/*What to do then ? 
->use setUsername.call(username); still no improvements because it is called, but agin its excecution context is removed from the call stack as soon as it executes
-> Use setUsername.call(this, username); to retrieve the changes by passing the current context with 'this' as its first argument. Now username is also set.

*/
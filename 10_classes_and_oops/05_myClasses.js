class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    loggedIn() {
        console.log(`User ${this.username} is logged in`);
        
    }
}

const streax = new User("streax", "stx@example.com", "479hd");
// console.log(streax);
streax.loggedIn();



//Behind the scene(without using class)
function createUser(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}
//As fun also behaves like object, we can set properties
createUser.prototype.loggedIn = function() {
    console.log(`User ${this.username} is logged in`);
}

const thor = new createUser("Thor", "thor@gmail.com", "123a");
console.log(thor);
thor.loggedIn();

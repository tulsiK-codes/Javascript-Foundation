class User {
    constructor(username) {
        this.username = username;
    }
    greetUser() {
        console.log(`Hello ${this.username}`);
        
    }
}

class Admin extends User {
    constructor(username, email, password) {
        super(username); //To call parent class constructor
        this.email = email;
        this.password = password;
    }
    showDetails() {
        console.log(`Username: ${this.username} \nPassword: ${this.password}`);
        
    }

    encrypt() {
        console.log(`Encrypted password: ${this.password}a@#`);
        
    }
}

const tkp = new User("Khushi");
// console.log(tkp);
// tkp.greetUser();


const tulsi = new Admin("Tulsi", "tk2example.com", "459#");
// tulsi.showDetails();
// tulsi.greetUser();
// tulsi.encrypt();

// tkp.showDetails(); -> Error: not a function as it is not accessible by tkp



//BEHIND THE SCENES
function newUser(username) {
    this.username = username;
}
newUser.prototype.greetUser = function () {
    console.log(`Hello ${this.username}`);
}

function admin(username, email, password) {
    newUser.call(this, username);
    this.email = email;
    this.password = password;
}

//Syntax: Object.setPrototypeOf(obj, parent)
// Object.setPrototypeOf(admin, newUser); -> Error: becoz it made admin inherit static properties directly from newUser. But, Because admin.prototype was never linked to newUser.prototype, theAdmin could not find greetUser

Object.setPrototypeOf(admin.prototype, newUser.prototype);

admin.prototype.showDetails = function () {
    console.log(`Username: ${this.username} \nPassword: ${this.password}`);
}
admin.prototype.encrypt = function () {
    console.log(`Encrypted password: ${this.password}a@#`);
}

const anyUser = new newUser("tea");
// anyUser.greetUser();

const theAdmin = new admin("Tulsi", "tkadmin@gmail.com", "5431");
theAdmin.greetUser(); //showing error, finally worked :) with .prototype becoz otherwise admin and newUser and not their extra prototypal properties
theAdmin.showDetails();
theAdmin.encrypt();
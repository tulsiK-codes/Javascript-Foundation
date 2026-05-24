class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase();
    }
    set email(value) {
        this._email = value;
    }

    get password() {
        return `${this._password}Hello`;//Cannot set property password of #<User> which has only a getter
        //Now [at get password] Maximum call stack size exceeded.. for that _password used
    }
    set password(value) {
        this._password = value; //But we have also set password in constructor
    }
    //[at set password] Maximum call stack size exceeded(Range Error) becoz a race condition b/w setter and constructor occurs here

}

const myUser = new User("tk@gmail.com", "456");
console.log(myUser.password); //456 we got access to the password
console.log(myUser.email);


/*
When you run const hitesh = new User("h@hitesh.ai", "abc"):
1. The Constructor Fires: JavaScript runs this.email = "h@hitesh.ai";.
2. The Setter is Triggered: Because a setter named email exists, JavaScript instantly jumps down to set email(value).
3. The Data is Saved Safely: Inside the setter, it executes this._email = value;. This creates the underscore version (_email) in memory and stores "h@hitesh.ai" inside it.4. The Loop is Broken: Because _email has no setter attached to it, the process stops cleanly.
*/


/* Similarly there are many scenarios where we dont want to allow access to some properties like password, or show message like "Cannot show password" or encrypted password. For these purposes, getters and setters are used */

//We have getters and setters as methods on each property by default,but we cannot see becoz we not written code on it

//We can have getters/setters on any of the properties or variables



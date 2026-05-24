function User (email, password){
    this._email = email;
    this._password = password;

    //We know that a function is also an object
    Object.defineProperty(this, "email", {
        get: function() {
            return `Your email is ${this._email}`;
        },
        set: function(value) {
            this._email = value;
        }
    });Object.defineProperty(this, "password", {
        get: function() {
            return `Your password is ${this._password}`;
        },
        set: function(value) {
            this._password = value;
        }
    });
    //Here we are creating public reference(fake ids) for 'email' and 'password' in the defineProperty. But, inside the function we are actually working with _email and _password.
}

const tulsi = new User("ta@yahoo.com","9337a");
console.log(tulsi.email);
console.log(tulsi.password);


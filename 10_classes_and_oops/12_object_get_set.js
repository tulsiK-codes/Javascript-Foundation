const User = {
    _email: 't@tk.com',
    _password: "tkp12",

    get email() {
        return this._email.toUpperCase();
    },
    set email(value) {
        this._email = value;
    }

}
// constructor fun - new
// Factory fun - Object.create()
const khushi = Object.create(User);
console.log(khushi.email); //T@TK.COM
//Here, when we call khushi.email, the getter email() is called/triggered inside it whatever we are returning _email is only known inside that instance, and ouside we are accessing email - public appearence


// Similarly the array.length property works. Behind the scene it calls its getter but we cannot change its setter.

//The underscore notation _email, can still be accessible outside. So, private elements came into the picture, which are not used for getters and setters
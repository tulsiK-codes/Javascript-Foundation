class User {
    // 1. Declare the private variables at the very top
    #email;
    #password;

    constructor(email, password) {
        //2. This triggers the setters right at birth
        this.email = email;
        this.password = password;
    }

    get email() {
        return this.#email.toUpperCase();
    }
    set email(value) {
        this.#email = value;
    }

    get password() {
        return this.#password.toUpperCase();
    }
    set password(value) {
        this.#password = value;
    }
}
const tea = new User("tea@hello.com", "1421");
console.log(tea.email);
console.log(tea.password);

//Steps involved:
/*
1. with new User the constructor fun was called
2. this.email and this.password inside the constructor fun, triggers the setters
3. While trying to get by tea.email, it triggers the getter named email() and getter returns the value.
4. Using private elements ensures no one from outside class could directly access #email
*/

const user1 = {
    username: "tulsi",
    email: "tkp@example.com",
    password: "1234",
    address: {
        city: "Rgp",
        state: "Odisha"
    }
}
const user2 = {
    username: "aady",
    email: "adsingh@example.com",
    password: "9337",
    address: "Chennai"
}
const {username: uname, address: {city} } = user1;
console.log(`Name is ${uname} and city is ${city}`);


const combinedUser = {...user2, ...user1}; //user2 overwrites fields already present in user1
// console.log(combinedUser);

const {username: usernm} = user1;
// console.log(usernm); //tulsi

// const {username, password: pwd} = user2;
// console.log(username); //aady
// console.log(pwd); //9337

const {username, address = "Vedvyas"} = user2;
// console.log(address); // Vedvyas by default/ Chennai if giving in obj declaration
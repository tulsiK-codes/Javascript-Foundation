//if
const temperature = 41

if(temperature < 50){
    // console.log("less than 50");    
}else{
    // console.log("greater than 50");    
}
// console.log("Executed")
// <, >, >=, <=, ==, !=, ===

const score = 200

if(score > 100){
    let grade = "A"
    // console.log(`User grade = ${grade}`);
    
}
// console.log(grade); //grade is not defined


const balance = 1000
if(balance < 500){
    console.log("less than 500");
    
}
else if(balance < 700) {
    console.log("less than 700");
    
}
else if(balance < 900) {
    console.log("less than 900");
    
}
else{
    console.log("less than 1200");
    
}

//For buying course
const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(isUserLoggedIn && debitCard && 2 == 2){
    console.log("Allow to buy course");
    
}
if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User is logged in");
    
}
//Dates (Note: Now Temporal API is available, but its still not supported by nodejs, so we arelearing about dates here!)
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.getTimezoneOffset());
// console.log(myDate.getUTCDate());
// console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023, 2, 10)
// let myCreatedDate = new Date(2023, 2, 10, 8, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("05-25-2022")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

//Printing using String interpolation ``
// console.log(`Date is ${newDate.getDate().toLocaleString()} and the time is ${newDate.getTime()}`); 

//Useful
console.log(newDate.toLocaleString('Default',{
    weekday: "short",
    day: "numeric",
    month:"2-digit",
    year: "numeric"
}));

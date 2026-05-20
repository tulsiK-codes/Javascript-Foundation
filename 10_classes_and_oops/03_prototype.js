let myName = "tulsi    "
/*Problem Statement: I want to inject a property called truelength() like we have length() preperty of Strings.

Whats different here is whenever we use.truelength() - it will show the exact length of the string excluding any whitespaces at the beginning or ending*/

/* So we can we inject this property? Yes we can */

String.prototype.truelength = function () {
    // console.log(`${this}`);
    
    console.log(`True length is: ${this.trim().length}`);
    
}
myName.truelength();
"   Fourteen   ".truelength();


//What happens when we add functionalities to Objects?
let myItem = {
    itemName: "shoes",
    price: "20$",
    itemCount: 1
}

//Property added to Object
Object.prototype.myPrice = function() {
    console.log(`Every item has a price.`);    
}

const fruits = ['Mango', 'Apple', 'Grapes'];
let item = "flowers"

// myItem.myPrice();
// fruits.myPrice();
// item.myPrice();
//The above shows that everything is an object and properties of object can be used by arrays strings and all. Because Objects is present at the top level. Also its not vice versa

Array.prototype.printMsg = function () {
    console.log(`This is an array`);
    
}
// fruits.printMsg();
// item.printMsg(); Error: item.printMsg is not a function

//Inheritance
const employee = {
    ename: "Tulsi",
    eid: "123@"
}


const sde1 = {
    work: "frontend"
}
const sde2 = {
    projects: 2,
    work: "full-stack",
    __proto__: employee
};

const hr = {
    work: "scheduling"
};
//Older syntax
hr.__proto__ = employee; //hr inherited employee
// console.log(hr.ename);

//modern syntax
// Object.setPrototypeOf(sde1,employee);
// console.log(sde1.eid);
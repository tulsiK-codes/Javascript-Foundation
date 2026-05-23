// Object.create()
const flower = {
    isRed: true,
    // display: function() {
    //     console.log(`The flower smells good`);
    // }
    display() {
        console.log(`The flower smells good`);
        
    }
}
const lily = Object.create(flower);
lily.color = "pink";
// lily.display()
// console.log(lily);


//user1 and user2 Both are same
const user1 = {};
const user2 = Object.create(Object.prototype);
const user3 = Object.create(
    {},
    {
        p: {
            value: 20,
            writable:true,
            enumerable:true,
            configurable: true,
        }
    }
    
)
// user3.p becoz p is a property
//Inside p: {} we defined how it would behave


//Object.defineProperty()
// Object.defineProperty(obj, "key2", {
//   enumerable: false,
//   configurable: false,
//   writable: false,
//   value: "static",
// });

//Object.defineProperties()
const obj = {};
Object.defineProperties(obj, {
  property1: {
    value: true,
    writable: true,
  },
  property2: {
    value: "Hello",
    writable: false,
  },
  // etc. etc.
});

//Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.
// Using for...of loop
const myObj = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(myObj)) {
  // console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

// Using array methods
Object.entries(myObj).forEach(([key, value]) => {
  // console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});


// Object.freeze()
const employee = {
  name: "Mayank",
  designation: "Developer",
  address: {
    street: "Rohini",
    city: "Delhi",
  },
};

Object.freeze(employee);

employee.name = "Dummy"; // fails silently in non-strict mode
employee.address.city = "Noida"; // attributes of child object can be modified

// console.log(employee.address.city); // "Noida"


//Object.getOwnPropertyDescriptor(obj, prop)
let myTea = {
  name: "mint tea",
  price: 45
}
const priceDescriptor = Object.getOwnPropertyDescriptor(myTea, "price");
console.log(priceDescriptor);
//Object.getOwnPropertyDescriptors(obj)
const teaDescriptor = Object.getOwnPropertyDescriptors(myTea);
console.log(teaDescriptor);


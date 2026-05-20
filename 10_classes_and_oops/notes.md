# javascript and classes

## OOP 
its a programming paradigm/ or way of writing codes. Like we have Procedural or Functional Paradigms.


## Object
- collection of properties(variables) and methods
- Promise(), Date()

## Why use OOP?
Javascript developers faced a massive 'spaghetti code' problem before ES6, as Js lacked the native structural tools.

This problem caused callback hells, dependency problems etc

Which was resolved by introducing classes as a syntactic sugar over the prototype based Js

## Parts of OOP
- Object literal - means literally talking about an object
- Constructor function
- Prototypes
- Classes
- Instances (new, this)

## 4 pillars
- Abstraction
- Encapsulation
- Inheritance
- Polymorphism

### Constructor function - 'new' keyword, it gives a new instance every time, without overriding previous ones
- What happens when we write 'new' keyword?
-  An empty object {} created.
- A constructor function referring to the same context is called
- all the arguments are injected into 'this' the current context
- It is shown in the function


## About Prototype
- Everything in javascript is an object. Object is the grandparent of everything
- The prototypial behaviour of javascript searches for things and if not found, goes to the parent then its grandparent till the object. Object has no parent, so it can only move to 'null'.
- Its because of the prototypal nature of Js, the new and this keyword, the classes and prototypal inheritance are available to us

---

- new keyword instanciates in Javascript, like we have objects as instances of classes in Java. This approach was follwed in Js from start
//Immediately Invoked Function Expression
//Used to avoid the pollution caused (sometimes) by global scope 

// ()() like chai()

(function chai() {
    //named IIFE
    console.log(`DB CONNECTED`);
    
})();

//simple iife
((name) => {
    console.log(`DN CONNECTED To ${name}`);
    
})('tulsi')

//Running two consecutive iife needa semicolon in between, becoz 1st one is invoked, js doesn't know where to end the context
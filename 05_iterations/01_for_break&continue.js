//for

for (let i = 0; i < 10; i++) {
    // console.log(i);   
}
// for (let i = 0; i < 10; i++) {
//     const element = i
//     if (element == 5) {
//         console.log("Got 5!");
        
//     }
//     console.log(element);   
// }

//Nested loop
for (let i = 1; i <= 5; i++) {
    // console.log(`Outer loop value: ${i}`);
    
    for (let j = 1; j <=5 ; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);        
        // console.log(i,"*",j," = ", i*j);
        // console.log(i + "*" + j + " = " + i*j);

    // console.log(`${i} * ${j} = ${i*j}`);        
        
    }
    
}


let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
    
}


//break and continue
// for (let index = 0; index < 10; index++) {
//    if (index == 5) {
//         console.log("Detected 5!");
//         break
//    }
//     console.log(`Value of i is ${index}`);
    
// }
for (let index = 0; index < 10; index++) {
   if (index == 5) {
        console.log("Detected 5!");
        continue
   }
    console.log(`Value of i is ${index}`);
    
}
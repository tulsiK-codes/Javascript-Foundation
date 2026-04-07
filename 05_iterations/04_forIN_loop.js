const mySubjects = {
    js: 'javascript',
    py: 'python',
    cpp: 'C++',
    rb: 'ruby'
}
//for-in loop with objects
for (const key in mySubjects) {
    // console.log(`${key} is shortcut for ${mySubjects[key]}`);
    
}

const programming = ["js", "py", "cpp", "rb", "java"]
//for-in loop with arrays
for (const key in programming) {
    // console.log(programming[key]); //key gives index
        
}

//for-in loop with maps
// const map = new Map()
// map.set('IN',"India")
// map.set('Eu',"Europe")
// map.set('UK',"United Kingdom")
// map.set('Fr',"France")

// for (const [key,value] in map) {
//     console.log(`${key} and ${value}`);      
    //DOES NOT RUN, BECOZ MAPS ARE NOT ENUMERATED WITH KEYS, BUT ARE ITERABLE ONE BY ONE
// }

//Its possible becoz strings also have keys(starting with 0 like the arrays)
const greetings = "Hello, user!"
for (const greet in greetings) {
    // console.log(greetings[greet]);    
    
}
function calculate(a, b) {
    return [a+b, a*b, a/b]
}

calculate(3,4) //(2) [7, 12]

const [sum, multiply, division = "No division"] = calculate(5,2);
// console.log(sum); //7
// console.log(multiply); //10
// console.log(division); //No division by default
// console.log(division); //2.5

const course = {
    instructor: "hitesh",
    topic: "js",
    progress: {
        hoursCompleted: "6 out of 10",
        day: 18
    }    
}
function printCourseProgress(course) {
    console.log(`Topic is ${course.topic} and instructor is ${course.instructor}`);
}
printCourseProgress(course);

function courseProgress({topic, instructor}) {
    console.log(`Topic is ${course.topic} and instructor is ${course.instructor}`);
}
courseProgress(course); 
//Topic is js and instructor is hitesh, same output as previous function but got by destructuring
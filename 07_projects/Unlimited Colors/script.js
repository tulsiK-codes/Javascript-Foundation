//Math.random() * 16 gives values btw 0 to 15, which matches with the indices of hexChars and every time concated to color.
const randomColorGenerator = function() {
  const hexChars = "abcdef0123456789";
  let color = '#';
  for(let i = 0; i < 6; i++){
  color += hexChars[Math.floor(Math.random() * 16)];
}
return color;
}

let intervalId;
const startChangingColor = function() {
  if(!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
  function changeBgColor(){
    document.body.style.backgroundColor = randomColorGenerator();
  }
};

const stopChangingColor = function (){
  clearInterval(intervalId);
  intervalId = null; //To clear the memory
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);
  


  //Earlier what I did was I kept the event listener inside a funtion. That means listen to that click event only when, the function is called, which is totally incorrect
//Edge Cases
/* intevalId = null; //To clear the memory
But the above will also cause problem(discuss later)
1. If I clicked the start button more tha once, the speed of getting random colors increased and the stop button didn't work after that

My mistake: I have put so many functionalities with the addEventListener(), I should only give it one callback() fun. Which Hitesh sir had seperated in diff functions
 */

   
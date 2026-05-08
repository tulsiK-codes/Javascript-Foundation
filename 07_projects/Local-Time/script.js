//First select the element where local time will be shown
const clock = document.querySelector('#clock');
// const clock = document.getElementById('clock');


//function that will run every second and show the updated time 
setInterval(function () {
  let date = new Date();
  clock.textContent = (date.toLocaleTimeString());//gets the local time
}, 1000);
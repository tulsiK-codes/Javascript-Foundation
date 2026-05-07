// const greyColor = document.querySelector('#grey');
// // greyColor.style.backgroundColor = "pink";
// greyColor.addEventListener('click', function (){
//   // console.log("Button clicked!");
//   document.body.style.backgroundColor = "grey";
// });

// Now the above is hard-coding when we explicitly write "grey" color. Instead we can write a function which selects each color-selector onClick and changes the backgroundColor of body to that specific color.
//Also this function should run for the color-selectors, so looping also required


/* document.querySelectorAll(".button");
this gives a node list
NodeList{0: {…}, 1: {…}, 2: {…}, 3: {…}}
0: HTMLSpanElement
1: HTMLSpanElement
2: HTMLSpanElement
3: HTMLSpanElement
<prototype>: NodeList
 */

//Selecting all the buttons
  const colorChangers = document.querySelectorAll(".button");

//Selecting each button with forEach() and running a funtion to add event-listeners on click, and change the backgroundColor
colorChangers.forEach((button) => {
button.addEventListener('click',function(e) {
  document.body.style.backgroundColor = e.currentTarget.dataset.color;
});
});


/* About e.target.id:
e or event - selects all type of event, here specifically click event
event.target - property refers to the actual element that was clicked
e.target.id - grabs the id of the element which was clicked
*/
const form = document.querySelector('form');
// console.log(form);

form.addEventListener('submit', function(e) {
  e.preventDefault();//Becoz, by default it will be submitted. But here we want to calculate the bmi and show it.

  //Selection of height, weight and results msg
  const height = parseInt( document.querySelector("#height").value);//parse the value not the element
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector('#results');

  //Check for the input(valid or not)
  if(height === "" || height < 0 || isNaN(height))  {
    results.innerHTML = `Please give a valid height`;
  }else if(weight === "" || weight < 0 || isNaN(weight))
  {
    results.innerHTML = `Please give a valid weight`;
  }else {
    //BMI = Weight in kg/height in (meter)^2
    //${height} is not required here, becoz we are not printing the height here, instead using its value which has been parsed into int
    const bmi = (weight / ((height * height)/10000)).toFixed(2); //here, height is in cm thus/10000. Also these are not put inside `` becoz we are calculating here, not printing all this
    results.innerHTML = `<span>${bmi}</span> <br>`;
    let msg = "";
    if(bmi < 18.6) {
      results.appendChild(document.createTextNode("You are underweight"));
    }else if(bmi >= 18.6 && bmi <= 24.9){
      results.appendChild(document.createTextNode("You have normal weight"));
    }else{
      results.appendChild(document.createTextNode("You are overweight"));
    }
  }

  //Let's find out whether under-weight, normal or overweight
});
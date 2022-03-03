// This function should return the BMI for a person 
function BMICalculator(mass, height) //50 5 
{
    // Write your code here

    if(mass<=0 || height<=0)
  {
    console.log("INVALID INPUT");
  }
  else{
    let bmi = mass/(height*height);
  // return bmi;
  console.log(bmi);
    
  }
}
module.exports = BMICalculator;


// git checkout -b "BMICalculator"
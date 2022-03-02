// This function should return the BMI for a person 
function BMICalculator(mass, height) //50 5 
{
    // Write your code here

    if (mass<=0 || height<=0) 
    {
        return "Invalid Valid";
    }
    else{
        return (mass)/(height*height); //50/5*5
    }
}
module.exports = BMICalculator;


// git checkout -b "BMICalculator"
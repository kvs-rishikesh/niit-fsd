/*
    Practice 1 - Find the Largest Number​
*/

// Declare and initialize variables
let num1 = 30;
let num2 = 50;
let num3 = 45;


// Declare a variable to store the resultant largest number
let resultant;
let ternaryresult;
// Write logic to find the largest number using nested-if
if (num1>=num2) {
    if (num1>=num3) {
        resultant = num1;
    }
    else {
        resultant = num3;
    }
}
else {
    if (num2>num3) {
        resultant = num2;
    }
    else {
        resultant = num3;
    }
}
// Display the largest number
console.log(resultant);


// Write logic to find the largest number using ternary operator
ternaryresult = (num1>=num2)?((num1>=num3)?a:c):((num2>=c)?num2:num3);


// Display the largest number
console.log(ternaryresult);
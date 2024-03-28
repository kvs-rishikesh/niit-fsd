/*
    Practice 4 - Sum the Digits of a Number
*/

// Declare and initialize variable to store the value whose digits need to be added up.

let a=4138;

// Declare and initialize variable to store the sum value.

let sum=0;

// Write `while` loop to calculate sum of digits.

while(a>0)
{
    let digit=a%10;
    sum+=digit;
    a=a/10;
}

// Display the value of sum.
console.log("The sum of digits",sum);
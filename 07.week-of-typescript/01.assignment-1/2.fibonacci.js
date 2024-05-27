// Question 2: Fibonacci Sequence
// Write a program to generate the Fibonacci sequence up to 100.
// a fibonnaci sequence is the integer sentence where the first two terms are 0 and 1
// the next term will be the sum of the pevious two terms
var num1 = 0;
var num2 = 1;
var limit = 100; //set upper limit of the series
var summation = 0; //initialize sum as 0. allows for redclaration
while (num1 <= limit) {
    console.log("num1 is:".concat(num1));
    summation = num1 + num2; //get sum of num1 and num2
    num1 = num2; //reassign num1 
    num2 = summation; //reinitialize num2
}

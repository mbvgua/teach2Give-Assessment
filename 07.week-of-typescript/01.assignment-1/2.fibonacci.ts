// Question 2: Fibonacci Sequence
// Write a program to generate the Fibonacci sequence up to 100.

// a fibonnaci sequence is the integer sentence where the first two terms are 0 and 1
// the next term will be the sum of the pevious two terms

let num1:number = 0
let num2:number = 1
let limit:number = 100    //set upper limit of the series
let summation:number = 0  //initialize sum as 0. allows for redclaration

while(num1<= limit){
    console.log(`num1 is:${num1}`)
    summation = num1 + num2     //get sum of num1 and num2
    num1 = num2     //reassign num1 
    num2 = summation    //reinitialize num2
}


// Question 1: FizzBuzz
// Write a program that prints the numbers from 1 to 100. For multiples of 3, 
// print "Fizz"; for multiples of 5, print "Buzz"; and for numbers that are 
// multiples of both 3 and 5, print "FizzBuzz".


for(let i:number = 0; i<=100; i++ ){
    if(i%3 === 0 && i%5 ===0){
        console.log(`${i}: FizzBuzz`)
    } else if (i%5 === 0){
        console.log(`${i}:Buzz`)
    } else if(i%3 ===0 ){
        console.log(`${i}:Fizz`)
    } else {
        console.log(`${i}:Not divisible by either 3 or 5`)
    }
}
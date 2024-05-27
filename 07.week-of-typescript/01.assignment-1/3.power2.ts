// Write a program that takes an integer as input and returns true if the
// input is a power of two
// Examples:
// 8=> returns true
// 6=> returns false

let userInput:number = prompt(`Choose a random number...`)

if (userInput%2 === 0){
    alert(`Number ${userInput} is a power of 2`)
} else if (userInput %2 !== 0){
    alert(`Number ${userInput} is not a multiple of 2`)
} else if (userInput === null){
    alert(`please input a number`)
} else(userInput ){
    alert(`please input a valid number`)
}
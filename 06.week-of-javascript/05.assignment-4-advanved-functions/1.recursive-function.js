// Write a recursive function in JavaScript that calculates the 
// factorial of a given non-negative integer n.

function isNonNegative(n){
    // function to check if numbe ris a non-negative val
    // i.e 0 or > 0 (+ve numbers)

    const numVal = (n >= 0 && Number.isInteger(n)) ? true : false
    return numVal
}

function returnFactorial(n){
    //function to return the factorial of a number
    let errorMsg = 'A non-negative number'

    if (!isNonNegative(n)){
        return errorMsg
    } else if (n===1){
        return n
    } else {
        // if no is not 1 or non-negative execute this
        answer = n * returnFactorial(n-1)
        return answer
    }
}

console.log(returnFactorial(9))
console.log(returnFactorial(4))
console.log(returnFactorial(-9))
console.log(returnFactorial(129))
console.log(returnFactorial(5.9))
console.log(returnFactorial(59))
console.log(returnFactorial(17))
console.log(returnFactorial(-7))


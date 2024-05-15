// Question Two
 
// Write a JavaScript function that takes a comma-separated numbers as input
// and returns the sum of those numbers. The function should validate the input:
// If any non-numeric characters are present (except commas), treat those 
// values as zero.
// If the input string is empty, return zero.

function sumCommaNumbers(input) {
    if (!input) return 0; 
    const numbers = input.split(',').map(Number); 
    const sum = numbers.reduce((acc, current) => acc + (isNaN(current) ? 0 : current), 0);

    return sum;
}


//some examples to try 
console.log(sumCommaNumbers("0,21,42,4,54")); 
console.log(sumCommaNumbers("15,44,a,442,51")); 
console.log(sumCommaNumbers("z,44,y,442,51")); 
console.log(sumCommaNumbers("15,44,l,l,449,51")); 
console.log(sumCommaNumbers(""));



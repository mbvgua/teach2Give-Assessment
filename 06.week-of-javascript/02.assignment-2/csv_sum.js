// Question Two
 
// Write a JavaScript function that takes a comma-separated numbers as input
// and returns the sum of those numbers. The function should validate the input:
// If any non-numeric characters are present (except commas), treat those 
// values as zero.
// If the input string is empty, return zero.


function getSum(string_input) {
    // Check if the numbers is an empty string and return 0
    if (string_input.trim() === "") {
        return 0
    }

    let numbers = string_input.split(',')	// Split the numbers on the comma    
    let totalSum = 0	// Initialize totalSum to zero

    for (let i of numbers) {
        
        num = i.trim();	// Trim whitespaces and convert each value to a float
        let parsed_number = parseFloat(num);

        // Check if the parsed number is a valid number
        if (isNaN(parsed_number)) {
            parsed_number = 0;
        }

        totalSum += parsed_number;	// Add the parsed number to the sum
    }

    return totalSum;
}





// 4. Capitalize Words
// Write a program that accepts a string as input, capitalizes the first letter of each 
// word in the string, and then returns the result string.

let your_string = prompt('Please input a sentence here')

function wordCapitalizer(your_string){
	let final_senetence = null

	final_senetence = your_string.trim().split(' ').toString().toUpperCase()
	return final_senetence
}

wordCapitalizer(your_string)
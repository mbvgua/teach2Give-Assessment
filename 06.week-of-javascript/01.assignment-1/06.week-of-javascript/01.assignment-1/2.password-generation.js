 
// 2. Password Generation: 
// This function helps users create secure passwords based on their names. It takes the 
// user's first and last names and combines the first 3 characters of the first name with 
// the last 3 characters of the last name, then adds "@2024" to the end. For example, if 
// the user's name is "John Doe", the generated password would be "JohDoe@2024".
 
// let user_name = prompt('Please input your name')
// let user_name = prompt(console.log('Please input your name'))

let user_name = prompt('Kindly input your first and last names')

function betterPassword(user_name){
	let first_three = null
	let last_three = null
	let new_password = null
	let add_this = '@2024'

	// remove the white space before sentences and the split them based on those within
	let indexed_name = user_name.trim().split(" ")
	first_three = indexed_name[0].slice(0,3)	//slice indexed item 1, from index 0-3
	last_three = indexed_name[1].slice(-3)	//slice indexed item 2 backwards

	new_password = first_three + last_three + add_this
	return new_password
}

betterPassword(user_name)	//initialize function to display results

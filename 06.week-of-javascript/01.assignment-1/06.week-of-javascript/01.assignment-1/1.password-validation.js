// 1. Password Validation:
// Imagine a program where users create accounts. You want to make sure their passwords 
// are strong and not easily guessed. This function checks if a password follows these 
// guidelines:
// It cannot be blank (empty).
// It cannot contain repeated characters in a row (like "1111" or "aaaaa" or "Jjjj").
// Optionally, you can add a list of common words that users shouldn't use as passwords 
// (like "password" or "123456").

let user_password = prompt('Please input hte password youd like to use.')
let common_passwords = ['password','paswuad','12345','1234','123456','siunihackbasi']


function checkPasswords(user_password,common_passwords){
	let check_results = null

	if (user_password == 0){
		check_results = 'Oops! looks like you did not input a password. Try again?'
	} else if ( user_password.includes(common_passwords)){
		check_results = 'Oh no! Your password is a common one. Try changing it?'
	} else if( user.password.includes().charCodeAt()) {

	}

	return check_results
}
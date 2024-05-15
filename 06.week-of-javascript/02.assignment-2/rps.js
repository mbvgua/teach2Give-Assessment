// Requirements:
// Objective: Create a two-player Rock Paper Scissors game in JavaScript,
// with one player being the user and the other being the computer.
 
// Functionality: 
// User selects their choice (rock, paper, or scissors) through buttons or 
// user input.
// Computer randomly chooses its move (0-0.33 rock, 0.34-0.66 paper,
//  0.67-1 scissors).
// Winner is determined based on standard rock paper scissors rules.
// Display the result (win, lose, tie) and user/computer choices on 
// the screen.
// Consider adding scorekeeping and a winner declaration for multiple 
// rounds (optional).

// Code Structure:
 
// Use at least one function declaration.
// Use at least one function expression.
// Use at least one arrow function.
// Use at least one anonymous function.
// Use a ternary operator for a concise outcome display 
// Utilize default parameters in a function


const +user_move = prompt('Interested in a rock,paper,scissors game?(Yes/no)' ) ? 
				prompt('which will you choose? 1-> rock, 2->paper,3->scissors') :
				prompt('okay.maybe next time')

let possible_choices = ['rock', 'paper','scissors']
let compWins
let userWins 

function getComputerMove(){
	let random_number = Math.random()
	if (random_number <= 0.33){
		let actualCompMove = possible_choices[0]
		return actualCompMove
	} else if (random_number <=0.66){
		let actualCompMove = possible_choices[1]
		return actualCompMove
	} else if (random_number >= 0.67){
		let actualCompMove = possible_choices[2]
		return actualCompMove
	} else {
		return 'An error occurred'
	}
}

function getUserMove(user_move){
	if (user_move === 1){
		let actualUserMove = possible_choices[0]
		return actualUserMove
	} else if (user_move === 1){
		let actualUserMove = possible_choices[1]
		return actualUserMove
	} else if (user_move === 1){
		let actualUserMove = possible_choices[2]
		return actualUserMove
	} else {
		return 'An error occurred'
	}
}

function determineWinner(){
	if (actualUserMove === actualCompMove){
		let winner = 'Its a tie'
		return winner  
	} else if(actualUserMove === possible_choices[0] && actualCompMove === possible_choices[2]){
		let winner = 'the user wins'
		return winner
	} else if(actualUserMove === possible_choices[1] && actualCompMove === possible_choices[0]){
		let winner = 'the user wins'
		return winner
	} else if(actualUserMove === possible_choices[2] && actualCompMove === possible_choices[1]){
		let winner = 'the user wins'
		return winner
	} else if(actualUserMove === possible_choices[1] && actualCompMove === possible_choices[2]){
		let winner = 'the computer wins'
		return winner
	} else if(actualUserMove === possible_choices[0] && actualCompMove === possible_choices[1]){
		let winner = 'the computer wins'
		return winner
	} else if(actualUserMove === possible_choices[2] && actualCompMove === possible_choices[0]){
		let winner = 'the computer wins'
		return winner
	}
} 

// Function expression
const incrementWinner = (winner) => {
    if (winner === 'the computer wins') userWins++;
    else if (winner === 'the user wins') compWins++;
};

// Cheat Mode:
 
// Design a "cheat mode" feature that alters the computer's choice in some
// way (optional).
// Come up with one specific implementation of cheat mode (e.g., computer
// always chooses scissors).

for(let i=game_number,i<total_number_games,i++){
	if(i % 2 === 1){
		actualCompMove = possible_choices[2]
		return actualCompMove
	}
}
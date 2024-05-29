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

// a ternary operator to get user input
const +user_move = prompt('Interested in a rock,paper,scissors game? \n(Yes/no)' ) ? 
				prompt('which will you choose? 1-> rock, 2->paper,3->scissors') :
				prompt('okay.maybe next time')

const +total_games = prompt('How many rounds would you like to play?')


while (i< total_games){

	// set possible choices as a method
	let choices = {
		'rock':'rock',
		'paper':'paper',
		'scissors':'scissors',
	}
	let compWins
	let userWins 


	function getComputerMove(){
		let random_number = Math.random()
		let compMove

		if (random_number < 0.34){
			compMove = choices.rock
			return compMove
		} else if (random_number < 0.67){
			compMove = choices.paper
			return compMove
		} else if (random_number > 0.68){
			compMove = choices.scissors
			return compMove
		} else {
			return 'An error occurred'
		}
	}

	function getUserMove(user_move){
		let userMove
		
		if (user_move === 1){
			userMove = choices.rock
			return userMove
		} else if (user_move === 2){
			userMove = choices.paper
			return userMove
		} else if (user_move === 3){
			userMove = choices.scissors
			return userMove
		} else {
			return 'Kindly select choose between 1,2 or 3'
		}
	}

	// function determineWinner(getUserMove,getComputerMove){
	function determineWinner(){
		let winner

		if (userMove === compMove){
			winner = 'Looks like its a tie'
			return winner  
		} else if(userMove === choices.rock){
			if(compMove === choices.scissors){
				winner = 'the user wins'
				return winner
			} else if (compMove === choices.paper){
				winner = 'the computer wins'
				return winner
			}
		} else if(userMove === choices.paper){
			if (compMove === choices.rock){
				winner = 'the user wins'
				return winner
			} else if( compMove === choices.scissors){
				winner = 'the computer wins'
				return winner
			}
		} 
	} 

	// Function expression
	const incrementWinner = (winner) => {
		if (winner === 'the computer wins') compWins++;
		else if (winner === 'the user wins') userWins++;
	};



	// Cheat Mode:
	
	// Design a "cheat mode" feature that alters the computer's choice in some
	// way (optional). Come up with one specific implementation of cheat 
	// mode (e.g., computer always chooses scissors).

	// for all the odd numered games, the computer should pick scissors
	for(let x=game_number,i<total_games,i++){
		if(x % 2 === 1){
			compMove = choices.scissors
			return compMove
		}
	}

}




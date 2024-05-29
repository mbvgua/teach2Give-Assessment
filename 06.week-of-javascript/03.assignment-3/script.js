console.log('hello world')


// create query selectors for basic buttons
addButton = document.getElementById('add')
updateButton = document.getElementById('update')
deleteButton = document.getElementById('delete')

// create events for the buttons
addButton.addEventListener('click', function(){
	console.log('you clicked the add button')
})

updateButton.addEventListener('click', function(){
	console.log('you clicked the update button')
})

deleteButton.addEventListener('click', function(){
	console.log('you clicked the delete button')
})
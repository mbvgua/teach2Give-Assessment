console.log('hello world')

// save the habits into an array
let habits = []

const addForm = document.querySelector('.form')
const bottomDiv = document.querySelector('.bottom')
const deleteBtn = document.querySelector('#delete')


addForm.addEventListener('submit', addItem)
deleteBtn.addEventListener('click', deleteItem)


// adding habits
function addItem(e){
    e.preventDefault()  //prevent normal form submission
    // console.log('you added a new habit')
    
    let html = ''
    
    // get the inputted values
    const dropDownVal = document.getElementById('dropdown').value
    const habitDesc = document.getElementById('habit-description').value
    const habitTime = document.getElementById('habit-time').value
    const habitType = document.querySelector('input[type="radio"]:checked').value   //remember this
    console.log(habitType)
    
    // calculate the time difference
    let lastDate = new Date(habitTime)
    let currentDate = new Date()
    const diffInMillis = currentDate.getTime() - lastDate.getTime() // get the diff in milliseconds
    const diffInDays = diffInMillis /(1000*60*60*24)    // get the diff by milliseconds
    
    
    // set logic for virtue or vice
    let type = (habitType === 'virtue') ? 'started' : 'stopped'
    // console.log(type)
    
    html += `<div class="card">
                <div class="habit-image">
                    <img src="images/health.jpg" alt="Habit Picture" id="image">
                    </div>
                    <div class="habit-title">
                    <h3 id="title"> ${dropDownVal} </h3>
                    </div>
                    <div class="habit-description">
                    <p id="description"> ${habitDesc} </p>
                    </div>
                    <div class="habit-time">
                    <p id="time"> ${Math.round(diffInDays)} Days since you ${type} </p>
                </div>
                <div class="bottom-button">
                    <button class="btn btn-primary" id="update"> Update </button>
                    <button class="btn btn-primary" id="delete"> Delete </button>
                    </div>
                    </div>`
                    
                    // append to the main page
                    bottomDiv.innerHTML += html

}

// deleting items
function deleteItem(e){
    console.log('you clicked the delete button')

    if(window.confirm('Do you want to Delete this?')){
            const delete_this = e.target.grandParentElement
            bottomDiv.removeChild(delete_this)
        }
    
    }
    
    
    























// // get the unique value of elements
// const bottomDiv = document.querySelector('.bottom')
// const updateBtn = document.querySelector('#update')
// const deleteBtn = document.querySelector('#delete')
// const addBtn = document.querySelector('#add')
// const habitTitle= document.getElementById('title')
// const habitImage= document.getElementById('image')
// const dropBtn = document.getElementById('dropdown')

// // function to show chain images to dropdown selection
// dropBtn.addEventListener('click', chainImages)

// function chainImages(){
//     console.log('button clicked')
//     let html = ''
//     if (dropBtn.value === 'fitness'){
//         html = `<img src="images/fitness.jpg" alt="fitness">`
//     } else if (dropBtn.value === 'smoking'){
//         html = `<img src="images/smoking.jpg" alt="smoking">`
//     } else if(dropBtn.value === 'cycling'){
//         html =`<img src="images/cycling.jpg" alt="cycling">`
//     } else if (dropBtn.value === 'walks'){
//         html = `<img src="images/walks.jpg" alt="walks">`
//     } else if (dropBtn.value === 'enough sleep'){
//         html = `<img src="images/sleeping.jpg" alt="enough sleep">`
//     } else if (dropBtn.value === 'healthy eating'){
//         html = `<img src="images/health.jpg" alt="healthy eating">`
//     }

//     habitImage.innerHTML = html
// }



// // function to show the habits
// function showHabits(){
//     // will show all the set habits
//     let html = ''
//     if (!habits.length){
//         html = `<div>
//                     <h2> 'Add some habits to track' </h2>
//                 </div`
//     } else {
//         movies.forEach(movie=>{
//             html+=`
// 			<div class="card">
// 				<div class="habit-image">
// 					<img src="${habit.image}" alt="Habit Picture" id="image">
// 				</div>
// 				<div class="habit-title">
// 					<h3 id="title"> ${habit.title} </h3>
// 				</div>
// 				<div class="bottom-button">
// 					<button id="update" onclick="updateHabit(${habit.id})"> Update </button>
// 					<button id="delete" onclick="deleteHabit(${habit.id})"> Delete </button>
// 				</div>`
//         })
//     }

//     bottomDiv.innerHTML = html
// }

// // function to delete a habit
// function deleteHabit(id){
//     if(window.confirm("Do you wish to delete the habit tracking?")){
//         habits=habits.filter(habit=>habit.id!==id)
//         showHabits()
//     } 
//     // console.log(id)  
// }

// // function to update a habit
// function updateHabit(id){
//     // updateButton.textContent='Update'
//     let existing = habits.find(habit=>habit.id===id)
//     prepopulate(existing)
//     updateBtn.addEventListener('click', function(){
//         if(updateBtn.textContent==='Update'){
           
//             existing.image=habitImage.value,
//             existing.title=habitTitle.value,
//             // existing.description=habitDescription.value
//             showHabits()

//             // updateButton.textContent="Add"
//             // habitImagenput.value=''
//             // habitTitle.value=''
//             // habitDescription.value=''
//         }
//     })
// }


// function  prepopulate(existing){
//     habitImage.value=existing.image
//     habitTitle.value= existing.title
//     // habitDescription.value=existing.description
// }


// function addHabit(){
//     let newHabit={
//         id:Math.floor(Math.random()*1000),
//         image:habitImage.value,
//         title:habitTitle.value,
//         description:habitDescription.value
//     }
//     if(addBtn.textContent==="Add"){
        
//         habits.push(newMovie)
//         showHabits()
//     };
     
// }

// addBtn.addEventListener('click', addHabit)
// showHabits()

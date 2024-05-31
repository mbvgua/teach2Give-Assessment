console.log('hello world')

// get the values of the input elements
const textArea = document.querySelector('textarea')! as HTMLTextAreaElement
const addButton = document.querySelector('#add')! as HTMLButtonElement
const deleteButton = document.querySelector('#delete')! as HTMLButtonElement
const updateButton = document.querySelector('#update')! as HTMLButtonElement
const tableBody = document.querySelector('.tbody')! as HTMLElement

// db url
const tasksUrl = 'http://localhost:3000/tasks'
let tasks =[] 

// define tasks interface
interface task {
    id:string | number
    content: string
    currentTime: string | number
}


// main class to house all the methods
class todoApp{
    private constructor{
        this.getTask()
    }
        
    // function to get user input and post to db
    async getTask(): Promise<void> {
        addButton.addEventListener('click', (event)=>{
            event.preventDefault()
            // console.log(event)  //ensure button is working            
            let todoTask = textArea.value.trim()
            const actualTime = new Date().toLocaleString()

            try {
                const response = fetch(tasksUrl, {
                  method: "POST",
                  body: JSON.stringify({ content:todoTask, currentTime:actualTime }),
                  headers: { 'Content-Type': 'application/json' },
                });
                console.log(`new task id: ${newTask}`)
            
                if (response.ok) {
                    console.log("Data added successfully!");
                } else {
                    console.log(`Error adding data to JSON database: ${response.statusText}`);
                }
            
            } catch (error) {
                console.error("Error adding data to JSON database:", error);
            }
            })
    }

    // function to fetch values from database
    async fetchTasks() {
        try{
            const response = await fetch(tasksUrl)
            tasks = await response.json() as task[]
            return tasks
        } catch(error){
            console.log('error fetching data from the database: ',error)
        }
    }

    // function to display the values in webpage
    async displayTasks():Promise<void>{
        let availableTasks:task[] = await this.fetchTasks()
        let html = ``

        availableTasks.forEach(availableTask => {
            html += `
                <tr>
                    <td>${availableTask.content}</td>
                    <td>${availableTask.currentTime}</td>
                    <td>
                        <button id="delete"><a href="#"> Delete </a></button>
                        <button id="update"><a href="#"> Update </a></button>
                    </td>
                </tr>`

        })
        tableBody.innerHTML += html
    }

        // unable to implement this module
    // async deleteTasks(){
    //     let availableTasks:task[] = await this.fetchTasks()
    //     availableTasks = availableTasks.filter(availableTask => availableTask.id !== id)
    // }

}


// add the eventListener to start entire project
document.addEventListener('DOMContentLoaded', ()=>{
    const todoAppInstance = new todoApp()
    
    todoAppInstance.getTask()
    .then(()=>{
        todoAppInstance.fetchTasks()
        todoAppInstance.displayTasks()
    })
  
  })
  



  


  
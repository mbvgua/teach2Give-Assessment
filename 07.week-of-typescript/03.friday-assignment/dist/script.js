"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log('hello world');
// get the values of the input elements
const textArea = document.querySelector('textarea');
const addButton = document.querySelector('#add');
const deleteButton = document.querySelector('#delete');
const updateButton = document.querySelector('#update');
const tableBody = document.querySelector('.tbody');
// db url
const tasksUrl = 'http://localhost:3000/tasks';
let tasks = [];
// main class to house all the methods
class todoApp {
    constructor() {
        this.getTask();
    }
    // function to get user input and post to db
    getTask() {
        return __awaiter(this, void 0, void 0, function* () {
            addButton.addEventListener('click', (event) => {
                event.preventDefault();
                // console.log(event)  //ensure button is working            
                let todoTask = textArea.value.trim();
                const actualTime = new Date().toLocaleString();
                try {
                    const response = fetch(tasksUrl, {
                        method: "POST",
                        body: JSON.stringify({ content: todoTask, currentTime: actualTime }),
                        headers: { 'Content-Type': 'application/json' },
                    });
                    console.log(`new task id: ${newTask}`);
                    if (response.ok) {
                        console.log("Data added successfully!");
                    }
                    else {
                        console.log(`Error adding data to JSON database: ${response.statusText}`);
                    }
                }
                catch (error) {
                    console.error("Error adding data to JSON database:", error);
                }
            });
        });
    }
    // function to fetch values from database
    fetchTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(tasksUrl);
                tasks = (yield response.json());
                return tasks;
            }
            catch (error) {
                console.log('error fetching data from the database: ', error);
            }
        });
    }
    // function to display the values in webpage
    displayTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            let availableTasks = yield this.fetchTasks();
            let html = ``;
            availableTasks.forEach(availableTask => {
                html += `
                <tr>
                    <td>${availableTask.content}</td>
                    <td>${availableTask.currentTime}</td>
                    <td>
                        <button id="delete"><a href="#"> Delete </a></button>
                        <button id="update"><a href="#"> Update </a></button>
                    </td>
                </tr>`;
            });
            tableBody.innerHTML += html;
        });
    }
}
// add the eventListener to start entire project
document.addEventListener('DOMContentLoaded', () => {
    const todoAppInstance = new todoApp();
    todoAppInstance.getTask()
        .then(() => {
        todoAppInstance.fetchTasks();
        todoAppInstance.displayTasks();
    });
});

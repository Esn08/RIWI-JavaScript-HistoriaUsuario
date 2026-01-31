
// This file has the DOM functions

// Import the functions from the utils file
import {addLocalStorage, deleteLocalStorage, changeStatusLocalStorage, dataStorage} from "./utils.js";

// DOM Elements selection
let taskInput = document.querySelector("#task-input")
let notesList = document.querySelector("#notes-list")
let taskForm = document.getElementById("task-form")


// Load saved tasks from localStorage when the window finishes loading
window.addEventListener("load", () => {
    let counter = 0
    let fragment = document.createDocumentFragment()
    dataStorage.forEach((obj) => {

        let noteElement = CreateTask(obj)
        fragment.append(noteElement)
        counter++
    })

    notesList.append(fragment)

    console.log(`Se han cargado ${counter} tareas`)

})

// Handle form submission to create new tasks
taskForm.addEventListener("submit", function (event) {
    event.preventDefault()

    // Basic validation: ensure the input is not empty
    if (taskInput.value.length > 1) {

        let obj = {
            task: taskInput.value,
            status : "Pendiente"
        }

        // Render the new task and save it to localStorage
        let noteElement = CreateTask(obj)
        notesList.append(noteElement)

        addLocalStorage(obj)

        console.log("Se ha creado una nueva tarea")

    } else {
        // Show a temporary error message if validation fails
        let errorInput= document.createElement("h3")
        errorInput.className = "error"
        errorInput.innerText = "El campo no puede estar vacio"

        notesList.before(errorInput)

        setTimeout(() => {
            errorInput.remove()}, 3000)

        }

    taskForm.reset()

})


/**
 * Creates the DOM structure for a single task item.
 * @param {Object} obj - The task data (text and status).
 * @returns {HTMLElement} The formatted list item.
 */
let CreateTask = function (obj) {

    let note = document.createElement("li")

    note.classList.add("note", (obj.status === "Pendiente") ? "note-uncompleted" : "note-completed" )
    let textTask = document.createElement("p")
    textTask.textContent = obj.task

    // Status icon and text setup
    let statusTask = document.createElement("div")
    let statusTaskImg = document.createElement("img")
    let statusTaskText = document.createElement("i")


    statusTask.classList.add("icons", (obj.status === "Pendiente") ? "uncompleted-icon" : "completed-icon" )
    statusTaskText.textContent = obj.status

    statusTask.append(statusTaskImg, statusTaskText)
    statusTask.addEventListener("click", changeStatusTask)

    // Delete button setup
    let deleteTask = document.createElement("div")
    let deleteTaskImg = document.createElement("img")
    let deleteTaskText = document.createElement("i")

    deleteTaskText.textContent = "Eliminar"
    deleteTask.classList.add("icons", "delete-icon")

    deleteTask.append(deleteTaskImg, deleteTaskText)
    deleteTask.addEventListener("click", deleteTaskBtn)

    note.append(textTask,  statusTask, deleteTask)
    return note

    }

/**
 * Handles the removal of a task from the UI and localStorage.
 */
let deleteTaskBtn = function (event) {

        event.preventDefault()

        let deleteTask = event.currentTarget.closest(".note")
        if (deleteTask) {
            deleteTask.remove();
        }

        let TaskToDelete= deleteTask.children[0].textContent
        deleteLocalStorage(TaskToDelete)

        console.log("Se ha removido la tarea")

}


/**
 * Toggles the task status between "Pendiente" and "Completada".
 */
let changeStatusTask = function (event) {
            event.preventDefault()

        let taskText = event.currentTarget.closest(".note")
        let statusTask = event.currentTarget

        if (statusTask.classList.contains("uncompleted-icon")) {
            // Change to Completed
            taskText.classList.replace("note-uncompleted", "note-completed")
            statusTask.classList.replace("uncompleted-icon", "completed-icon")
            statusTask.children[1].textContent = "Completada"
            changeStatusLocalStorage(taskText.firstElementChild.textContent,  statusTask.children[1].textContent)
            console.log("Se ha completado la tarea")

        } else {
            // Change back to Pending
            taskText.classList.replace("note-completed", "note-uncompleted")
            statusTask.classList.replace("completed-icon", "uncompleted-icon")
            statusTask.children[1].textContent = "Pendiente"
            changeStatusLocalStorage( taskText.firstElementChild.textContent,  statusTask.children[1].textContent)
            console.log("La tarea ahora está pendiente")


        }

    }

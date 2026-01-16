// This file has functions to management the localStorage

// Retrieve stored notes from localStorage or initialize an empty array if none exist
let storage=localStorage.getItem("notas")
export let dataStorage = JSON.parse(storage) || []

/**
 * Adds a new task object to dataStorage and updates localStorage.
 * @param {Object} data - The task object to be stored.
 */
export function addLocalStorage(data) {

    dataStorage.push(data)
    localStorage.setItem("notas", JSON.stringify(dataStorage))

}

/**
 * Removes a task from dataStorage based on its name and updates localStorage.
 * @param {string} key - The name/text of the task to delete.
 */
export function deleteLocalStorage(key) {

    let index = dataStorage.findIndex(object => object.task === key)
    dataStorage.splice(index, 1)
    localStorage.setItem("notas", JSON.stringify(dataStorage))
}


/**
 * Updates the status (Pending/Completed) of a specific task in localStorage.
 * @param {string} key - The name/text of the task.
 * @param {string} status - The new status to be set.
 */
export function changeStatusLocalStorage(key, status) {

    dataStorage.forEach((object) => {

        if (object.task === key) {
            object.status = status
        }

    })

    localStorage.setItem("notas", JSON.stringify(dataStorage))

}



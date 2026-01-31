import {createProduct, updateProduct, deleteProduct} from "./services/api.js"
import {createElement} from "./utils/create-element.js"
import {loadStorage, saveStorage, updateStorage, deleteStorage} from "./utils/storage.js";

// DOM variables
let inputs = ["id", "producto", "cantidad", "precio", "descripcion"]
const form = document.getElementById("form")
const table= document.querySelector(".tbody-data")
const btnUpdate = document.getElementById("btn-update")
const btnSubmit = document.getElementById("btn-submit")
const btnAPI= document.getElementById("btn-api")

// Handle new product creation via form submission
form.addEventListener("submit", async (e) => {
    e.preventDefault()

    let formData = new FormData(form)
    let data = Object.fromEntries(formData)
    
    let confirmed = confirm("¿Desea crear el producto?")

    // Basic validation to ensure required fields are not empty
    if (!(data.producto === "") && !(data.cantidad === "") && !(data.precio === "") && !(data.descripcion === "") && confirmed) {

        // Generate a random ID and persist the new product to API and Local Storage
        let id = Math.floor(Math.random() * 1000);
        createProduct(id, data.producto, data.cantidad, data.precio, data.descripcion)
        saveStorage({id, ...data})

        // Refresh UI table
        form.reset()
        
        alert("¡Se ha creado con éxito el producto!")

    }

    else {
        alert("Ningún campo puede estar vacio")
    }

    table.innerHTML = ""
    await createElement()

})

// Initialize application data on page load
window.addEventListener("load", () => {
    createElement()
    loadStorage()
})

// Sync UI with API data by reloading
btnAPI.addEventListener("click", () => {
    createElement()
    loadStorage()
})

// Delegation for Edit and Delete actions within the products table
table.addEventListener("click", async (e) => {

    // Action: Populate form for editing a product
    if (e.target.classList.contains("edit")) {

        let tableRow = e.target.closest("tr")
        let counter = 0

        // Map row cell values back to form inputs
        for (let input of inputs) {
            form[input].value = tableRow.children[counter].textContent
            counter++
        }

        // Toggle button visibility/state for update mode
        btnUpdate.disabled = false;
        btnUpdate.classList.replace("btn-disable", "btn")

        btnSubmit.disabled = true;
        btnSubmit.classList.replace("btn", "btn-disable")

    }

    // Action: Delete a product from API and local storage
    else if (e.target.classList.contains("delete")) {

        let tableRow = e.target.closest("tr")
        let idToDelete = tableRow.children[0]

        // Delete the product
        let response= await deleteProduct(idToDelete.textContent)
        
        let confirmed = confirm("¿Desea eliminar el producto?")
        
        if (response && confirmed) {

            deleteStorage(idToDelete.textContent)

            table.innerHTML = ""
            await createElement()
            
            alert("¡Se ha eliminado con éxito el producto!")

        }

    }

})

// Handle existing product updates
btnUpdate.addEventListener("click", async () => {

    let dataToUpdate = form.elements
    let objectToUpdate = {}

    // Collect current values from a form
    for (let input of inputs) {

        objectToUpdate[input] = dataToUpdate[input].value
    }
    
    // Sync updates with external API and storage
    if (confirm(`¿Desea actualizar el producto?`)) {
        
        await updateProduct(objectToUpdate["id"], objectToUpdate["producto"], objectToUpdate["cantidad"], objectToUpdate["precio"], objectToUpdate["descripcion"])
        updateStorage(objectToUpdate["id"], objectToUpdate)

        // Refresh table and reset form state
        table.innerHTML = ""
        await createElement()


        alert("¡Se ha actualizado con éxito el producto!")

        form.reset()

        // Restore buttons to a default 'Save' state
        btnUpdate.disabled = true;
        btnUpdate.classList.replace("btn", "btn-disable")

        btnSubmit.disabled = false;
        btnSubmit.classList.replace("btn-disable", "btn")
        
    }
    
})






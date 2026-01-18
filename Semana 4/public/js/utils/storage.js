import {getAllProducts} from "../services/api.js";

// Get all products from the API and save them in the localStorage
export async function loadStorage() {

    // Check if there is old data in the browser
    let localData = localStorage.getItem("productos") || false;

    if (localData) {

        // Remove old data to start fresh
        localStorage.removeItem("productos")
    }

    // Get new data from the server
    let data = await getAllProducts();

    // Save the new list in the browser storage
    localStorage.setItem("productos", JSON.stringify(data));
    console.log("Se han cargado los datos al local storage")

}

// Add a new product to the browser storage
export function saveStorage(newProduct) {

    // Get the current list or create a new empty list
    let storage = JSON.parse(localStorage.getItem("productos")) || [];

    // Put the new product in the list
    storage.push(newProduct);

    // Save the updated list in the browser
    localStorage.setItem("productos", JSON.stringify(storage));
}


// Update the information of a product in the browser storage
export function updateStorage(id, updatedObj) {

    // Get the products from the browser
    let storage = JSON.parse(localStorage.getItem("productos")) || [];

    // Find the position of the product with this ID
    let indexToUpdate = storage.findIndex(product => product.id == id);

    // Replace the old product with the new information
    if (indexToUpdate !== -1) {
        storage[indexToUpdate] = updatedObj;
        localStorage.setItem("productos", JSON.stringify(storage));
    }
}

// Delete a product from the browser storage using its ID
export function deleteStorage(id) {

    // Get the products from the browser
    let storage = JSON.parse(localStorage.getItem("productos")) || [];

    // Create a new list without the product we want to delete
    let newStorage = storage.filter(product => product.id != id);
    localStorage.setItem("productos", JSON.stringify(newStorage));
}
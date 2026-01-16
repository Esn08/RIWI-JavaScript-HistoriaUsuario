
// **************************** TASK 1 ********************************

// Define variables to store product information
let product
let price
let quantity
let object

console.log("\n" + "*********** Tarea 1 ***********" + "\n")

// Main loop to ensure a valid product name is entered
do {

    // Prompt the user for the product name
    product = String(prompt("Ingrese el nombre del producto"))

    // Check if the product name is not empty
    if (!(product.length < 1) && !(product === "")) {

        // Loop to validate numerical inputs for price and quantity
        do {
            price = Number(prompt("Ingrese el precio del producto"))
            quantity = Number(prompt("Ingrese la cantidad del producto"))

            // Validate that both price and quantity are valid numbers
            if (!(isNaN(price)) && !(isNaN(quantity))) {

                // Generate a random ID for the object
                let randomId = Math.floor(Math.random()*100)

                // Create the product object with the collected data
                object = { id: randomId, product: product, price: price, quantity: quantity}

                alert("¡Se ha agregado correctamente el producto a un objecto!")

                console.log("El objecto con los productos es: ")
                console.log(object)

            } else {

                alert("¡Error!, Los campos precio y cantidad solo permiten números")

            }

        } while ((isNaN(price)) || (isNaN(quantity)))

    } else {
        alert("¡Error!, El campo producto no puede estar vacio")
    }

} while (product.length < 1 )

console.log()



// **************************** TASK 2 ********************************

console.log("\n" + "*********** Tarea 2 ***********" + "\n")

let numberSet = new Set([1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8])

console.log("El resultado del set es: ")
console.log(numberSet)

console.log(`Se agrega el numero ${100} al Set: `)
numberSet.add(100)
console.log(numberSet)

console.log(`Se verifica si el numero ${100} existe usando ".has()": ${numberSet.has(100)}`)

console.log(`Se elimina el numero ${8} del set:`)
numberSet.delete(8)
console.log(numberSet)

console.log("Se recorre el Set con for…of: ")
numberSet.forEach(element => {console.log(element)})



// **************************** TASK 3 ********************************

console.log()
console.log("\n" + "*********** Tarea 3 ***********" + "\n")

// Convert the product object into a Map using Object.entries()
let createMap = new Map(Object.entries(object))

console.log("El resultado de transformar el Object con los productos a un Map es:")
console.log(createMap)



// **************************** TASK 4 ********************************

console.log()
console.log("\n" + "*********** Tarea 4 ***********" + "\n")

console.log("Se recorre el object con for…in:")

for (let product in object) {
    console.log(`${product}: ${object[product]}`)
}

console.log("\n" + "Se recorre el set con for…of:")
for (let number of numberSet) {
    console.log(`${number}`)
}

console.log("\n" + "Se recorre el Map con forEach():")
createMap.forEach((value, key) =>
    {console.log(`${key}: ${value}`)})



// **************************** Object Methods ********************************

console.log("\n" + "Métodos de Object" + "\n")

// Get an array of all keys in the object
console.log("Object.keys()")
console.log(Object.keys(object))

// Get an array of all values in the object
console.log("Object.values()")
console.log(Object.values(object))

// Get an array of key-value pairs (as arrays) from the object
console.log("Object.entries()")
console.log(Object.entries(object))
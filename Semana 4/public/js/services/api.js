
// Get all products from the API
export async function getAllProducts() {

    try {
        let request = await fetch("http://localhost:5000/productos")

        if (!request.ok) {
            throw new Error()
        }

        console.log(`Se ha cargado con éxito los datos; status: ${request.status}`)
        return await request.json()

    } catch (error) {

        // Show an error if the data does not load
        console.error("No se cargaron los datos:", error.message)
        return []
    }

}

// Create a new product in the API with the POST method
export async function createProduct(id, producto, cantidad , precio, descripcion) {

    try{

        let data = { "id" : `${id}`, "producto" : producto, "cantidad": cantidad, "precio": precio, "descripcion" : descripcion}

        // Send a new product to the server
        let request = await fetch("http://localhost:5000/productos", {method: 'POST', headers: {
                'Content-Type': 'Application/json' }, body : JSON.stringify(data) })

        // Check if the product was created successfully
        let response = await (request.ok ? request.json() : Promise.reject(`Resultado: ¡ERROR!, ${request.statusText}`))

        console.log(`Estado: ${request.status}, Resultado: ${request.statusText}`)
        console.log("Se ha creado correctamente")
        console.log(response)

    } catch (error) {

        console.log(error)
    }


}

// Find one specific product by ID
async function readProduct(id) {
    try{
        // Request information for a single item
        let request = await fetch(`http://localhost:5000/productos/${id}`)
        return (request.ok ? request.json() : request.status);
    }

    catch (error) {

        return error
    }

}

// Update information of an existing product with the PUT method
export async function updateProduct (id, producto = null, cantidad=null , precio=null, descripcion=null){

    let updateData = [id, producto, cantidad , precio, descripcion]
    let category = ["id", "producto", "cantidad" , "precio", "descripcion"]

    // Get the current product data
    let data = await readProduct(id)

    // Check if the product exists before updating
    if (data instanceof Object) {

        // Replace old values with new ones
        for (let position in category ) {

            if (updateData[position]) {
                data[category[position]] = updateData[position]
            }
        }

        // Use PUT to update the data
        let request = await fetch(`http://localhost:5000/productos/${id}`, {method:"PUT",
            headers:{"Content-Type" : "Application/json"},
            body : JSON.stringify(data)
        })

        // Check if the product was updated successfully
        try {
            let result = await (request.ok ? request.json() : Promise.reject(`Resultado: ¡ERROR!, ${request.statusText}`))
            console.log(`Estado: ${request.status}, Resultado: ${request.statusText}`)
            console.log("Se ha actualizado; ")
            console.log(result)

        } catch (error) {
            console.log(error)
        }
    }

    else {
        console.log(`¡Error!, No existe el productos con id: ${id}`)
    }

}

// Delete a product using the DELETE method
export async function deleteProduct(id) {

    // First, check if the product exists
    let data  = await readProduct(id)
    if (data instanceof Object) {

        // Use DELETE to remove the product
        let request = await fetch(`http://localhost:5000/productos/${id}`, {
             method: "DELETE"
            })

        console.log(`Se ha eliminado correctamente, Estado: ${request.status}, Resultado: ${request.statusText}`)
        return request.ok

    } else  {

        console.log(`¡Error!, No existe el producto con id: ${id}`)
    }

}




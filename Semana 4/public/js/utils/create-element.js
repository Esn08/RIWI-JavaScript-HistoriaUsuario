import {getAllProducts} from "../services/api.js"

// Create a new list without the product we want to delete
export async function createElement() {

    try {

        // Find the table body in the HTML
        let tbodyData = document.querySelector(".tbody-data")

        // Get the list of products from the API
        let arrayData = await getAllProducts()

        // Clear the table before adding new items
        tbodyData.innerHTML = ""

        let row

        // Use a fragment to adding new elements
        let fragmentTableBody = document.createDocumentFragment()

        arrayData.forEach((objects) => {

            // Create a new table row for each product
            row = document.createElement("tr")

            let fragmentTableRow = document.createDocumentFragment()

            // Create a table cell for each property of the product
            for (let object in objects) {

                let td = document.createElement("td")
                td.textContent = objects[object]

                td.classList.add("table-data")

                fragmentTableRow.append(td)
            }

            // Create cells for the Edit and Delete buttons
            for (let icon of ["edit", "delete"]) {

                let td = document.createElement("td")
                let iconEdit = document.createElement("i")
                td.classList.add("table-data")

                // Add CSS classes to show the icons
                iconEdit.classList.add("icons", icon)
                td.append(iconEdit)


                fragmentTableRow.append(td)
            }

            row.append(fragmentTableRow)
            fragmentTableBody.append(row)

        })

        // Add all the rows to the table at once
        tbodyData.append(fragmentTableBody)

    }

    catch (error) {
        console.log(error)
    }

}



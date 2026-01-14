
// This file implements a functional program in HTML and JavaScript that allows interaction with the user,
// requesting name and age, validating the input, and displaying dynamic messages
// if the entered age is correct or not.

// Data is requested with "prompt"
let name = prompt("Ingrese su nombre");
let age = prompt("Ingrese su edad")

// Data are converted
name = String(name).toUpperCase()
age = parseInt(age)

// Conditional statement to validate the age
if (!isNaN(age)) {

    if (age < 18) {
        alert(`Hola ${name}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`)
    }

    else if (age >= 18) {
        alert(`Hola ${name}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`)
    }
}

else {
    console.error("Error: Por favor, ingresa una edad válida en números.")
    alert("Error: Por favor, ingresa una edad válida en números.")
}

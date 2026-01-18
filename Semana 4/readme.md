# User Story 4 (Product Management System)

A full-stack web application for managing a product inventory. This project integrates a dynamic user interface with a REST API and browser persistence.

## Features

- Full CRUD operations (Create, Read, Update, Delete) via Fetch API.
- Local Storage synchronization used as a data backup.
- Dynamic DOM manipulation for real-time table updates.
- Form validation to prevent empty or invalid entries.
- Responsive design for inventory management.

## Project Structure

- public/: Contains the frontend assets (HTML, CSS, JS).
- public/js/services/: API communication logic using Fetch.
- public/js/utils/: Helper functions for DOM and Storage management.
- server/: Contains the database (db.json) for JSON Server.

## Prerequisites

- Node.js installed on your machine.
- npm (Node Package Manager).

## Installation

1. Clone or download this repository.
2. Open a terminal in the project root directory.
3. Install the dependencies by running:
   npm install

## Getting Started

1. Start the local server (JSON Server) by running:
   npm run start

2. The server will be running at: http://localhost:5000/productos

3. Open the index.html file in your browser (using Live Server) to start managing your products.

## Usage

- Add Product: Fill in the form and click "Guardar".
- Edit Product: Click the edit icon in the table, modify the values in the form, and click "Actualizar".
- Delete Product: Click the delete icon in the table to remove it from both the API and Local Storage.
- Sync: Use the "Sincronizar" button to refresh data from the API.


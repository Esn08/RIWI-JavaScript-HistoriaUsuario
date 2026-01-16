# User Story 3 (Task List)

A task management web application that allows users to create, delete, and track the status of their daily activities. This project focuses on DOM manipulation and data persistence using the browser's Local Storage.

## Features

- Add tasks: Create new notes through a form.
- Delete tasks: Remove specific items from the list.
- Toggle Status: Switch task status between "Pending" and "Completed" by clicking on the status area.
- Data Persistence: All tasks and their current statuses are saved in the browser, so they remain available even after refreshing the page.
- Basic Validation: Prevents adding empty tasks with a temporary on-screen error message.

## Project Structure

- manipulacion_dom.html: The main entry point containing the interface structure.
- style.css: Contains the layout and visual styles, including transitions and hover effects.
- script.js: Manages DOM operations, event listeners, and UI updates.
- utils.js: Handles the logic for interacting with localStorage (saving, deleting, and updating data).

## Technical Implementation

- DOM API: Uses methods like getElementById, querySelector, appendChild, and remove to manage elements.
- Local Storage: Implements JSON.stringify and JSON.parse to store a collection of task objects.
- ES6 Modules: Uses import/export syntax to organize code across multiple files.
- Event Handling: Utilizes event delegation and specific listeners for form submissions and clicks.

## How to Run

1. Clone or download the project files.
2. Ensure you have the required assets (icons and images) in an "assets" folder as referenced in the CSS.
3. Open the manipulacion_dom.html file in any modern web browser.
4. Note: Since the project uses ES6 Modules, you should serve the files using a local server (like Live Server in WebStorm) to avoid CORS issues.

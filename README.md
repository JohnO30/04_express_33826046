# 04_express_33826046

A simple Express.js and Node.js web server that serves static files and uses modular route handling.
This project demonstrates the basic structure of an Express application, including static file serving and route organisation.


## Features Used

-Serves static files from the public directory

-Custom route handling via /routes/main.js

-Dedicated /file endpoint that serves a.html

-Organised structure for scalability and clarity

## Technologies Used

-Node.js — JavaScript runtime environment

-Express.js — Backend web framework for Node.js

-HTML — For static content in the public directory

-JavaScript  — Core scripting language used throughout the project

npm — Package manager for handling dependencies

## Project Structure

04_express_33826046/
/ index.js               # Main server entry point
/ routes/                # Folder containing route definitions
/  └── main.js            # Main route handler
/ public/                # Folder for static assets (HTML, CSS, JS, images)
/   └── a.html             # Example static file served at /file
/ package.json           # Project metadata and dependencies
/ package-lock.json
/ .gitignore
/ node_modules/

## Installation & Setup

## Clone or extract this repository:
```bash
git clone https://github.com/JohnO30/04_express_33826046.git
cd 04_express_33826046
 ```

# Install dependencies:
```bash
npm install
```
# Start the server:
```bash
node index.js






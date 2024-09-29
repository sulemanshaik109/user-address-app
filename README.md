# User Address App

A full-stack application where users can register and store their addresses using a React.js frontend and a Node.js backend with SQLite as the database.


## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technology Stack](#technologies-stack)
- [Deployment](#deployment)
- [Testing](#testing)
- [Resources](#resources)

## Features

- **User Registration**: Register a user with a name and address.
- **Address Management**: Store multiple addresses for different users.
- **Data Persistence**: Data is saved using SQLite, and Sequelize is used for database interactions.

## Prerequisites

Make sure you have the following installed:

- Node.js (v14 or later)
- npm (v6 or later)

## Installation

1. Clone the repository:

   ```
   https://github.com/sulemanshaik109/user-address-app.git

   cd user-address-app
   ```

2. Install backend dependencies:

    ```
    cd backend

    npm install
    ```

3. Install frontend dependencies:

    ```
    cd frontend

    npm install
    ```

## Usage

### Running the Backend Server

- Navigate to the backend directory:

    ```
    cd backend
    ```

- Start the backend server:

    ```
    node server.js
    ```

    The backend server will start on http://localhost:5000.

### Running the Frontend Application

- Navigate to the frontend directory:

    ```
    cd frontend
    ```

- Start the frontend development server:

    ```
    npm start
    ```

    The frontend application will start on http://localhost:3000.

## API Endpoints

- To register a new user and save their address.

    POST http://localhost:5000/api/register

    ```
    {
        "name": "Suleman Shaik",
        "address": "Rajahmundry, East Godavari, Andhra Pradesh"
    }
    ```


## Technology Stack

### Backend
- **Express** – Web framework for Node.js
- **Sequelize** – ORM for managing SQLite database
- **SQLite3** – Lightweight database
- **Body-parser** – Parse incoming request bodies
- **Cors** – Enable CORS for cross-origin requests

### Frontend

- **React.js** – UI library for building frontend
- **Axios** – HTTP client for making API requests

## Deployment

### Backend Deployment on Render

1. Create a Render Account:
    - Sign up for a free account at Render.

2. Create a New Web Service:
    - In the Render dashboard, click on "New" and then "Web Service".
    - Connect your GitHub repository and select the notes-app repository.

3. Configure Build and Start Commands:
    - Root Directory:

        ```
        backend
        ```

    - Build Command:

        ```
        npm install
        ```

    - Start Command:

        ```
        node server.js
        ```

4. Set Environment Variables:

    - In the Render service settings, add any necessary environment variables.

5. Deploy:

    - Trigger a new deploy by pushing changes to your GitHub repository or clicking the "Deploy" button in Render.

6. Access the Application:

    - Once the deployment is successful, you can access the backend at the URL provided by Render.

### Frontend Deployment on Netlify

1. Create a Netlify Account:

    - Sign up for a free account at Netlify.

2. Create a New Site:

    - In the Netlify dashboard, click on "Add new site" and connect your GitHub repository.
3. Configure Build and Publish Settings:

    - Build Command:

        ```
        npm install & npm run build
        ```
    - Publish Directory:
        
        ```
        frontend
        ```

4. Deploy:

    - Trigger a new deploy by pushing changes to your GitHub repository or clicking the "Deploy site" button in Netlify.
5. Access the Application:

    - Once the deployment is successful, you can access the frontend at the URL provided by Netlify.

## Testing

### Using Postman

1. Add New Request:

    - Create a new request in Postman or Insomnia.
    - Set the request method to GET, POST, PUT, or DELETE depending on the endpoint you want to test.

2. Set URL:

    - Use the URL provided by Render for the backend. For example:

        ```
        https://suleman-user-address-app.onrender.com/api/register
        ```

3. Send Request:

    - Send the request and check the response.

## Resources

<details>
<summary>Colors</summary>
<br/>

<div style="background-color: #f2f2f2; width: 150px; padding: 10px; color: black">Hex: #f2f2f2</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #cccccc; width: 150px; padding: 10px; color: black">Hex: #cccccc</div>
<div style="background-color: #4caf50; width: 150px; padding: 10px; color: white">Hex: #4caf50</div>
<div style="background-color: #45a049; width: 150px; padding: 10px; color: white">Hex: #45a049</div>
<div style="background-color: #008000; width: 150px; padding: 10px; color: white">Hex: #008000</div>

</details>
<br/>

# Show Your Support

Give a ⭐️ if you like this project!

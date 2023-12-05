'use strict';

// Use a library called "dotenv" to "read" my .env file
// And put all of the "key/value" pairs into an object called process.env
require("dotenv").config();

// Bring in the "express" library 
const express = require("express");

// Bring in the "cors" library to let us have more open access to the server
const cors = require("cors");

// Initialize my express application
const app = express();

// Activate "cors"
app.use( cors() );

// Should be in the "enviornment"
const PORT = process.env.PORT || 3000;

app.get('/', (request, response) => {
    let data = { message: "Hello World"};
    response.json(data);
});

// Start up the web server
app.listen( 
    PORT, 
    () => console.log(`Listening on port ${PORT}`)
);

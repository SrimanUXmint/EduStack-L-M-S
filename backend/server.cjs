require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const server = express();
const routes = require('./routes.cjs');
const port = process.env.PORT || 8080;

// Use .env for MongoDB Atlas URI
const mongoURI = "mongodb+srv://sriman:sdevi1978@cluster0.neqyqmj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB Atlas
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  }) 
  .catch(err => {
    console.error('Error connecting to MongoDB Atlas:', err.message);
  });

// Enable CORS for all origins
server.use(cors({
  origin: '*',  // Allow all origins
  credentials: true,
}));

server.use(cookieParser());
server.use(express.json());
server.use(routes);

// Start the server
server.listen(port, (error) => {
  if (error) {
    console.log("Error starting server");
  } else {
    console.log(`Server running on port ${port}`);
  }
});

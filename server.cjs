// server.js
require('dotenv').config()
const express = require('express');
const cors = require('cors');           // Import CORS for handling cross-origin requests
require('dotenv').config();             // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;
const ClientMessage = require('./models/client.cjs');
const mongoose = require('mongoose');

const mongo_url = "mongodb://127.0.0.1:27017/port";
const dbUrl = process.env.ATLASDB_URL;

main().then((res)=>{
    console.log("Connection Established");
}).catch((err)=>{
    console.log("Something Went Wrong :(");
})
async function main() {
    await mongoose.connect(dbUrl);
}

// Middleware
app.use(cors());                        // Enable CORS
app.use(express.json());                // Built-in body parser for JSON

// Simple test route
app.get('/', (req, res) => {
  res.send('Backend is running successfully!');
});

// Route for handling contact form submissions (example)

app.post('/contact', async (req, res) => {
  const { name, email, description } = req.body;
  
  if (!name || !email || !description) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  
  try {
    const newMessage = await ClientMessage.create({ name, email, description });
    res.status(200).json({ message: 'Contact form submitted successfully', data: newMessage });
  } catch (error) {
    res.status(500).json({ message: 'Error saving message', error });
  }
});

app.get("/contacts", async (req, res) => {
  try {
    const messages = await ClientMessage.find();
    res.status(200).json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ message: "Server error, please try again later." });
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
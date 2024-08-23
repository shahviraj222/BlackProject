// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const DataModel = require('./models/DataModel');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define Routes
app.get('/', (req, res) => {
    res.send('Hello from Express');
});

//retrive the data
app.get('/api/data', async (req, res) => {
    try {
        const data = await DataModel.find(); // Retrieve all documents from the collection
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

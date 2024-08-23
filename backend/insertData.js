// backend/insertData.js
const mongoose = require('mongoose');
const DataModel = require('./models/DataModel.js');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Function to insert data
const insertData = async (dataArray) => {
    try {
        await DataModel.insertMany(dataArray);
        console.log('Data inserted successfully');
    } catch (error) {
        console.error('Error inserting data:', error);
    } finally {
        mongoose.connection.close();
    }
};

// Sample data to insert
//importing file and uploading the data in mongodb
const file = require('./jsondata.json')
console.log(typeof (file))
console.log(file)
insertData(file)
const data = [
    {
        end_year: "",
        intensity: 6,
        sector: "Energy",
        topic: "gas",
        insight: "Annual Energy Outlook",
        url: "http://www.eia.gov/outlooks/aeo/pdf/0383(2017).pdf",
        region: "Northern America",
        start_year: "",
        impact: "",
        added: "January, 20 2017 03:51:25",
        published: "January, 09 2017 00:00:00",
        country: "United States of America",
        relevance: 2,
        pestle: "Industries",
        source: "EIA",
        title: "U.S. natural gas consumption is expected to increase during much of the projection period.",
        likelihood: 3
    },
];



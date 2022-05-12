const { default: axios } = require("axios");
const sdk = require("node-appwrite");
require("dotenv").config();
const client = new sdk.Client();

client
    .setEndpoint(process.env.API_ENDPOINT) // Your API Endpoint
    .setProject(process.env.PROJECT_ID) // Your project ID
    .setKey(process.env.SECRET_KEY); // Your secret API key

const database = new sdk.Database(client);

const createDocment = async () => {
    const nasaData = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`
    );
    return database.createDocument(process.env.COLLECTION_ID, "unique()", {
        hdurl: nasaData.data.hdurl,
        title: nasaData.data.title,
        explanation: nasaData.data.explanation,
        date: nasaData.data.date,
    });
};

module.exports = { createDocment };

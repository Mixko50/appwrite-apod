const { default: axios } = require("axios");
const express = require("express");
const app = express();
const port = 8080;
const sdk = require("node-appwrite");
require("dotenv").config();
const config = require("./config");
const { PORT } = config;
const { createDocment } = require("./create_document");

require("./cron-job.js");

const client = new sdk.Client();

client
    .setEndpoint(process.env.API_ENDPOINT) // Your API Endpoint
    .setProject(process.env.PROJECT_ID) // Your project ID
    .setKey(process.env.SECRET_KEY); // Your secret API key

const database = new sdk.Database(client);

app.get("/api/all", async (req, res) => {
    const data = await database.listDocuments(process.env.COLLECTION_ID);
    res.send(data);
});

const createDoc = async (req, res) => {
    const docs = await createDocment();
    res.send(docs);
};

app.get("/api/create", createDoc);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

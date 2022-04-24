import { Appwrite } from "appwrite";

// Init your Web SDK
const appwrite = new Appwrite();

appwrite
    .setEndpoint(`${process.env.REACT_APP_APPWRITE_ENDPOINT}`) // Your Appwrite Endpoint
    .setProject(`${process.env.REACT_APP_API_PROJECT_ID}`) // Your project ID
    ;

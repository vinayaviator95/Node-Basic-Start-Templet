const express = require("express"); // import express
const app = express(); // create an a app from express
const dotenv = require("dotenv"); // import dotenv to use env variables
dotenv.config(); // enabling dotenv into the project
const PORT = process.env.PORT || 4000; // accessing dotenv file for PORT
const appController = require("./controller/appControler"); //imported the app controller will give it to app

//MIDDLEWARES
app.use(express.json()); //make server to understand the json data

app.use("/", appController); // told application that / is our main route

// fire up the server
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});

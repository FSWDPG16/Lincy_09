const express = require("express");
const mongoose = require("mongoose");
const app = express();
const connection = require("./common/connection");
const router =require('./Routes/userRoute')
const dat = require("./Models/usersSchema");
require("dotenv").config();
//const port = 8000;
app.use(express.json());

connection();
app.use(router);
const PORT = process.env.port ||3000;

app.listen(PORT, () => {
console.log(`server running on the port:${PORT}`);
});
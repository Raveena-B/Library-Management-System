const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000 ;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser : true, useUnifiedTopology : true});

const connection = mongoose.connection;
connection.once('open' , () => {
 console.log("MongoDB database connection established successfully");

})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
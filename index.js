const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const product = require('./routes/product');
app.use(bodyParser.json());
const Connect = require("./database/connection");

app.use(cors());
app.use("/", product);

app.listen(8000, async() => {
    await Connect();
    console.log('Server is running')
})
const mongoose = require('mongoose');
const express = require('express');
const config = require('config');
const app = express();
app.use(express.json());

const connectDB = require('./models/db');





const port = 5000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


const mongoose = require('mongoose');
const express = require('express');
const config = require('config');
const app = express();
const router = require('./routes/index');
const connectDB = require('./config/db');

app.use(express.json());
app.use('/', router);
connectDB();


const port = 5000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


const express = require('express');
const mongoose = require('mongoose');
const db = require('../models/url');
const validUrl = require('valid-url');
const shortid = require('shortid');


const router = express.Router();

router.post('/', async (req, res) => {

    const longUrl = req.body.longUrl;
    if (validUrl.isUri(longUrl)) {
        const shortId = shortid.generate();

    }

})

module.exports = router;
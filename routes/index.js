const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const db = require('../models/url');
const validUrl = require('valid-url');
const shortid = require('shortid');


const router = express.Router();

router.post('/', async (req, res) => {

    const longUrl = req.body.longUrl;
    if (validUrl.isUri(longUrl)) {

        const shortId = shortid.generate();
        const shortUrl = config.get('baseURL') + '/' + shortId;
        try {
            const url = new db({
                longUrl: longUrl,
                shortId: shortId,
                shortUrl: shortUrl,
                date: new Date()
            });
            await url.save();
            res.send(url);
        } catch (err) {
            res.send(err.message);
        }
    }
    else
        res.status(401).send('Invalid URL');
})

module.exports = router;
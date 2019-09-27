const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const db = require('../models/url');
const validUrl = require('valid-url');
const shortid = require('shortid');


const router = express.Router();

router.post('/api/strip', async (req, res) => {

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

router.get('/:code', async (req, res) => {

    try {
        const shortId = req.params.code;
        const url = await db.findOne({ shortId: shortId });
        if (url) {
            const longUrl = url.longUrl;
            res.redirect(longUrl);
        }
        else {
            res.send('URL not found').status(404);
        }

    } catch (err) {
        console.log(err.message);
    }
})

module.exports = router;
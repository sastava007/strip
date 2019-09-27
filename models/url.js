const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    "longUrl": { type: String, required: true },
    "urlCode": { type: String, required: true },
    "shortUrl": { type: String, required: true },
    "date": { type: Date, default: Date.now }
});

module.exports = mongoose.model('url', schema);

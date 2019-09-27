const mongoose = require('mongoose');
const config = require('config');

mongoose.connect(config.get('mongoURI'), () => {
    console.log('Connected to Database');
})

const schema = new mongoose.Schema({
    "longUrl": { type: String, required: true },
    "urlCode": { type: String, required: true },
    "shortUrl": { type: String, required: true },
    "date": { type: Date, default: Date.now }
});

module.exports = mongoose.model('db', schema);


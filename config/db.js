const mongoose = require('mongoose');
const config = require('config');

mongoose.connect(config.get('mongoURI'), () => {
    console.log('Connected to Database');
})

const connectDB = async () => {
    try {

        await mongoose.connect(config.get('mongoURI'), { useNewUrlParser: true });
        console.log('Connected to Database');

    } catch (err) {
        console.log(err.message);
        process.exit(1);

    }
}

module.exports = connectDB;

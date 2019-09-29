const mongoose = require('mongoose');
const config = require('config');

const connectDB = async () => {
    try {
        
        await mongoose.connect(`mongodb+srv://sastava007:${process.env.password}@strip-pwqe1.gcp.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true });
        console.log('Connected to Database');

    } catch (err) {
        console.log(err.message);
        process.exit(1);

    }
}

module.exports = connectDB;

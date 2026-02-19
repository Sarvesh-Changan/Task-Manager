const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const uri = process.env.MONGO_URI;
        if (!uri || typeof uri !== 'string' || uri.trim() === '') {
            console.error("Missing MONGO_URI environment variable");
            process.exit(1);
        }
        await mongoose.connect(uri, {
            serverSelectionTimeoutMS: 10000,
            maxPoolSize: 10,
        });
        const c = mongoose.connection;
        if (!c || !c.host) {
            console.error("MongoDB connection established but no host info");
        } else {
            console.log(`MongoDB connected: ${c.host}`);
        }
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1);
    }
}

module.exports = connectDB;

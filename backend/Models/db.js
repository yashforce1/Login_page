const mongoose = require('mongoose');

const mongo_url = process.env.MONGO_CONN;

if (!mongo_url) {
    throw new Error('MONGO_CONN is not configured. Add a valid MongoDB connection string to backend/.env');
}

mongoose.connect(mongo_url)
.then(()=>{
    console.log('MongoDB Connected...');
})
.catch((err)=>{
    console.error('MongoDB connection error:', err.message);
    process.exitCode = 1;
});

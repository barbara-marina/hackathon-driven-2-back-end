import mongoose from 'mongoose';
import 'dotenv/config.js';

const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI);
    const db = mongoose.connection.on('error', (e) => { 
        console.log(e.message); 
    }).once('open', () => { 
        console.log('database connected');
    });
}

export default dbConnection;
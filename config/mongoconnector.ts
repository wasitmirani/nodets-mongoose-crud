// Set up mongoose connection
import mongoose, { Document } from 'mongoose';

// const mongodb_host =process.env.DB_HOST;

const mongodb_host = process.env.DB_HOST || 'mongodb://localhost:27017/crud_db?authMechanism=DEFAULT';


// const db =
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const connect=async ()=>{
   return await mongoose
    .connect(mongodb_host)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.error('MongoDB connection error:', error);
    });
}

export=connect;
// Set up mongoose connection
import mongoose from 'mongoose';

const mongodb_host =process.env.DB_HOST;
mongoose.connect(mongodb_host);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
export =db;
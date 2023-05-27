import mongoose from 'mongoose';
import { IUser } from '../../interfaces/IUser';

const  userSchema = new mongoose.Schema<IUser>({
     uid:String,
    name: String,
    email: String,
    phone: String,
    password:String,
  },
  {
    timestamps: true
  });
  
export = userSchema;
  

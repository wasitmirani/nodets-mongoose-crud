import { Document } from 'mongoose';

export interface IUser extends Document {
    uid:string;
    name: string;
    email: string;
    phone: string;
    password:string;
    updatedAt:Date;
    createdAt: Date;   
}
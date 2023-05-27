import { Document } from 'mongoose';

export interface IUser extends Document {
    // id?: string;
    uid:string;
    name: string;
    email: string;
    phone: string;
    password:string;
    updated_at:Date;
    created_at: Date;   
}